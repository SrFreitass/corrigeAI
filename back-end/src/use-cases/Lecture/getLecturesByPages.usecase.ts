import { Lectures } from "@prisma/client";
import { z } from "zod";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class GetLecturesByPagesUseCase {
  constructor(
    private readonly lectureRepository: BaseClassRepository<Lectures>,
  ) {}

  async execute(page: number) {
    z.number().positive().parse(page);

    const lectures = await this.lectureRepository.find(
      page * 20 - 20,
      page * 20,
    );

    return lectures;
  }
}
