import { z } from "zod";
import { EssayRepository } from "../../repositories/Essay/Essay.repository";

export class GetEssayThemeByIdUseCase {
  constructor(private readonly essayRepository: EssayRepository) {}

  async execute(essayThemeInfo: { essayThemeId: string; entity: string }) {
    const essayThemeInfoSchema = z.object({
      essayThemeId: z.string().uuid(),
      entity: z.string(),
    });

    essayThemeInfoSchema.strict().parse(essayThemeInfo);

    const { entity, essayThemeId } = essayThemeInfo;

    return await this.essayRepository.findOne({
      id: essayThemeId,
      entity: entity.toUpperCase(),
    });
  }
}
