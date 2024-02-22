import { Courses } from "@prisma/client";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class GetCourseUseCase {
  constructor(
    private readonly courseRepository: BaseClassRepository<Courses>,
  ) {}

  async execute(page: number) {
    const limit = page * 20;
    const offset = limit - 20;

    const courses = await this.courseRepository.find(offset, limit);
    return courses;
  }
}
