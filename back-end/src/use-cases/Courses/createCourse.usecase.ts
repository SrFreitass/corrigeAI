import { Courses } from "@prisma/client";
import { z } from "zod";
import { CourseInputDTO } from "../../dto/Course.dto";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class CreateCourseUseCase {
  constructor(
    private readonly courseRepository: BaseClassRepository<Courses>,
  ) {}

  async execute(body: CourseInputDTO) {
    const { schoolSubjectId, title } = body;
    const bodySchema = z.object({
      schoolSubjectId: z.string().uuid(),
      title: z.string().min(6).max(60),
    });

    bodySchema.parse(body);

    return await this.courseRepository.create({
      title,
      schoolSubject_id: schoolSubjectId,
    } as Courses);
  }
}
