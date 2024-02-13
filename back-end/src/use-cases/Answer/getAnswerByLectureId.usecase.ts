import { Answers } from "@prisma/client";
import { z } from "zod";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class getAnswerByLectureIdUseCase {
  constructor(
    private readonly AnswerRepository: BaseClassRepository<Answers>,
  ) {}

  async execute(userId: string) {
    z.string().uuid().parse(userId);

    const answers = await this.AnswerRepository.findManyWithWhere({
      item: userId,
    });

    return answers;
  }
}
