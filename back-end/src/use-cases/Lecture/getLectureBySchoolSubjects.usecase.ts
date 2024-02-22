import { Lectures } from "@prisma/client";
import { z } from "zod";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class GetLectureSubjectsUseCase {
  constructor(
    private readonly lectureRepository: BaseClassRepository<Lectures>,
  ) {}

  async execute(Subjectid: string) {
    z.string().uuid({ message: "ID is invalid" }).parse(Subjectid);

    const lectures = await this.lectureRepository.findManyWithWhere({
      item: Subjectid,
    });

    return lectures;
  }
}
