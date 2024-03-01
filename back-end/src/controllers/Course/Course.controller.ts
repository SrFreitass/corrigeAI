import { FastifyReply, FastifyRequest } from "fastify";
import { CourseInputDTO } from "../../dto/Course.dto";
import { CoursesRepository } from "../../repositories/Courses/Courses.repository";
import { CreateCourseUseCase } from "../../use-cases/Courses/createCourse.usecase";
import { GetCourseUseCase } from "../../use-cases/Courses/getCourses.usecase";
import { GetCoursesBySubjectUseCase } from "../../use-cases/Courses/getCoursesBySubject.usecase";
import { errorHandling } from "../../utils/error/error.function";

class CourseController {
  async getAllCourses(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { page } = req.params as { page: string };
      const useCase = new GetCourseUseCase(new CoursesRepository());
      const output = await useCase.execute(Number(page));
      return {
        statusCode: 200,
        message: "OK",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async findCourseBySubject(req: FastifyRequest, reply: FastifyReply) {
    try {
      const params = req.params as {
        typeSubject: "ENEM" | "SCHOOL";
        subjectId: string;
      };
      const useCase = new GetCoursesBySubjectUseCase(new CoursesRepository());
      const output = await useCase.execute({
        typeSubject: params.typeSubject.toUpperCase() as "ENEM" | "SCHOOL",
        subjectId: params.subjectId,
      });
      return {
        statusCode: 200,
        message: "OK",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async createCourse(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as CourseInputDTO;
      const useCase = new CreateCourseUseCase(new CoursesRepository());
      const output = await useCase.execute(body);

      return { statusCode: 200, message: "Created", data: output };
    } catch (error) {
      errorHandling(error, reply);
    }
  }
}

export default new CourseController();
