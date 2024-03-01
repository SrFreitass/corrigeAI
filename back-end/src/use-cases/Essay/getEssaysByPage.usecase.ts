import { z } from "zod";
import { EssayRepository } from "../../repositories/Essay/Essay.repository";
import { getOffAndLimit } from "../../utils/page/page.function";

export class GetEssaysByPage {
  constructor(private readonly essayRepository: EssayRepository) {}

  async execute(page: number) {
    z.number().min(1).parse(page);

    const { limit, offset } = getOffAndLimit(page, 20);
    return await this.essayRepository.find(offset, limit);
  }
}
