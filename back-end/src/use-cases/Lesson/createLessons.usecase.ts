import { Lessons } from "@prisma/client";
import { z } from "zod";
import { LessonInputDTO } from "../../dto/Lesson.dto";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class CreateLessonsUseCase {
  constructor(
    private readonly lessonRepository: BaseClassRepository<Lessons>,
  ) {}

  async execute(lessons: LessonInputDTO[]) {
    const lessonSchema = z
      .object({
        title: z.string().min(6),
        description: z.string().min(6),
        lecture_id: z.string().uuid(),
        image_url: z.string().min(8).optional(),
        options: z.string().array().min(5).max(5),
        answer: z.number().min(1).max(5),
        answer_text: z.string().optional(),
        answer_img_url: z.string().optional(),
      })
      .strict();

    if (!lessons[0]) throw new Error();

    lessons?.forEach((item) => lessonSchema.parse(item));

    await this.lessonRepository.createMany(lessons as Lessons[]);

    return lessons;
  }
}
