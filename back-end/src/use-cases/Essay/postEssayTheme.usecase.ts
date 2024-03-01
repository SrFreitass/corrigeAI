import { z } from "zod";
import { EssayThemeInputDTO } from "../../dto/EssayTheme.dto";
import { EssayRepository } from "../../repositories/Essay/Essay.repository";

export class PostEssayThemeUseCase {
  constructor(private readonly essayRepository: EssayRepository) {}

  async execute(essayTheme: EssayThemeInputDTO) {
    const essayThemeSchema = z.object({
      title: z.string(),
      essayImg: z.string(),
      entity: z.string(),
      figures: z.array(z.string()),
      texts: z.array(z.string()),
      year: z.number().min(1990),
    });

    essayThemeSchema.strict().parse(essayTheme);

    return await this.essayRepository.create(essayTheme);
  }
}
