import { Lectures } from "@prisma/client";
import { z } from "zod";
import { LectureOutputDTO } from "../../dto/Lecure.dto";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class GetLecturesByCourseIdUseCase {
  constructor(private lectureRepository: BaseClassRepository<Lectures>) {}

  async execute(courseId: string): Promise<LectureOutputDTO[] | null> {
    z.string().uuid().parse(courseId);

    const lectures = await this.lectureRepository.findManyWithWhere({
      item: courseId,
    });

    return lectures;
  }
}
