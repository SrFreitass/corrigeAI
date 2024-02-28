import { CoursesRepository } from "../../repositories/Courses/Courses.repository";

export class GetCourseUseCase {
  constructor(private readonly courseRepository: CoursesRepository) {}

  async execute(page: number) {
    const limit = page * 20;
    const offset = limit - 20;

    const courses = await this.courseRepository.find(offset, limit);
    return courses;
  }
}
