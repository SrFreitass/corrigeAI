import { z } from "zod";
import { EssayUserRepository } from "../../repositories/EssayUser/EssayUser.repository";

export class GetEssayUserByIdUseCase {
  constructor(private readonly essayUserRepository: EssayUserRepository) {}

  async execute(id: string) {
    z.string().uuid().parse(id);

    return await this.essayUserRepository.findOne({ id });
  }
}
