import axios from "axios";
import { z } from "zod";
import { prompt } from "./prompt";

import { EssayUserInputDTO } from "../../dto/EssayUser.dto";
import { EssayRepository } from "../../repositories/Essay/Essay.repository";
import { EssayUserRepository } from "../../repositories/EssayUser/EssayUser.repository";

interface IResponseEssay {
  data: {
    candidates: [
      {
        content: {
          parts: [
            {
              text: string;
            },
          ];
        };
      },
    ];
  };
}

export class SendEssayUseCase {
  urlApi = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

  constructor(
    private readonly essayUserRepository: EssayUserRepository,
    private readonly essayRepository: EssayRepository,
  ) {}

  async execute(essayBody: EssayUserInputDTO) {
    const schemaEssay = z
      .object({
        userId: z.string().uuid(),
        essay: z.string().min(80),
        themeId: z.string().uuid(),
        entity: z.string(),
      })
      .strict();

    schemaEssay.parse(essayBody);

    const { entity, essay: essayUser, themeId, userId } = essayBody;

    const essayTheme = await this.essayRepository.findOne({
      entity: entity.toUpperCase(),
      id: themeId,
    });

    z.literal(true).parse(!!essayTheme?.title);

    const res = (await axios.post(this.urlApi, {
      contents: [
        {
          parts: [
            {
              text: `${prompt} Tema: ${essayTheme?.title} \n Redação: ${essayUser}`,
            },
          ],
        },
      ],
    })) as IResponseEssay;

    const { data } = res;
    const result = JSON.parse(
      data.candidates[0]?.content?.parts[0]?.text
        .replace(/[`]/g, "")
        .replaceAll("json", "")
        .replaceAll("JSON", ""),
    );
    console.log(data.candidates[0]?.content?.parts[0]?.text);

    const points = result["Nota Final"];
    const essayUserCreated = await this.essayUserRepository.create({
      entity: entity.toUpperCase(),
      essay: essayBody.essay,
      points,
      result: JSON.stringify(result),
      themeId,
      userId,
    });

    return {
      id: essayUserCreated.id,
      ...result,
    };
  }
}
