import { z } from "zod";
import { LectureOutputDTO } from "../../dto/Lecure.dto";
import { LectureRepository } from "../../repositories/Lecture/Lecture.repository";

export class GetLecturesByCourseIdUseCase {
  constructor(private lectureRepository: LectureRepository) {}

  async execute(courseId: string): Promise<LectureOutputDTO[] | null> {
    z.string().uuid().parse(courseId);

    const lectures = await this.lectureRepository.findManyWithWhere({
      item: courseId,
    });

    return lectures;
  }
}
