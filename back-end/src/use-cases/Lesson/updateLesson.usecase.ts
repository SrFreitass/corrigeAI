import { Lessons } from "@prisma/client";
import { LessonInputDTO } from "../../dto/Lesson.dto";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class UpdateLessonUseCase {
  constructor(
    private readonly lessonRepository: BaseClassRepository<Lessons>,
  ) {}

  async execute(id: string, data: LessonInputDTO) {
    const lesson = await this.lessonRepository.update(id, {
      item: {
        ...(data as Lessons),
      },
    });

    return lesson;
  }
}
