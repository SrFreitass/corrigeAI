import axios from 'axios';
import { z } from 'zod';
import { prompt } from './prompt';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

import { Essays } from '@prisma/client';
import { EssayInputDTO } from '../../dto/Essay.dto';

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
  constructor(private readonly essayRepository: BaseClassRepository<Essays>) {}

  async execute(essay: EssayInputDTO) {
    const schemaEssay = z
      .object({
        userId: z.string().uuid(),
        essayContent: z.string().min(80),
        theme: z.string().min(5),
      })
      .strict();

    schemaEssay.parse(essay);

    const urlAPI = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const res = (await axios.post(urlAPI, {
      contents: [
        {
          parts: [
            {
              text: `${prompt} Tema: ${essay.theme} \n Redação: ${essay.essayContent}`,
            },
          ],
        },
      ],
    })) as IResponseEssay;

    const { data } = res;
    const result = data.candidates[0].content.parts[0].text;
    const points = Number(result.split('\nNota final:')[1]);

    if (isNaN(points)) {
      throw new Error('Points is not number');
    }

    await this.essayRepository.create({
      essay: essay.essayContent,
      user_id: essay.userId,
      theme: essay.theme,
      points,
    } as Essays);

    return result;
  }
}
