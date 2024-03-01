import { z } from "zod";
import { CoursesRepository } from "../../repositories/Courses/Courses.repository";

export class GetCoursesBySubjectUseCase {
  constructor(private readonly coursesRepository: CoursesRepository) {}

  async execute({
    typeSubject,
    subjectId,
  }: {
    typeSubject: "ENEM" | "SCHOOL";
    subjectId: string;
  }) {
    const findCourseSchema = z.object({
      typeSubject: z.string().min(4).max(6),
      subjectId: z.string().uuid(),
    });

    findCourseSchema.strict().parse({ typeSubject, subjectId });

    if (typeSubject === "ENEM") {
      const courses = await this.coursesRepository.findManyWithWhere({
        schoolSubjectId: "",
        enemSubjectId: subjectId,
      });

      console.log(courses);
      return courses;
    }

    const courses = await this.coursesRepository.findManyWithWhere({
      enemSubjectId: "",
      schoolSubjectId: subjectId,
    });

    return courses;
  }
}
