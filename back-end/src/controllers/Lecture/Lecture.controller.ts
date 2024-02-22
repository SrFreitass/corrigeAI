import { FastifyReply, FastifyRequest } from "fastify";
import { LectureInputDTO } from "../../dto/Lecure.dto";
import { LectureRepository } from "../../repositories/Lecture/Lecture.repository";
import { CreateLectureUseCase } from "../../use-cases/Lecture/createLecture.usecase";
import { DeleteLectureUseCase } from "../../use-cases/Lecture/deleteLecture.usecase";
import { GetLectureSubjectsUseCase } from "../../use-cases/Lecture/getLectureBySchoolSubjects.usecase";
import { GetLecturesByCourseIdUseCase } from "../../use-cases/Lecture/getLecturesByCourseId.usecase";
import { GetLecturesByPagesUseCase } from "../../use-cases/Lecture/getLecturesByPages.usecase";
import { UpdateLectureUseCase } from "../../use-cases/Lecture/updateLecture.usecase";
import { errorHandling } from "../../utils/error/error.function";

class LectureController {
  async getLecturesByPages(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { page } = req.params as { page: number };
      const usecase = new GetLecturesByPagesUseCase(new LectureRepository());
      const output = await usecase.execute(Number(page));
      reply.send({
        statusCode: 200,
        message: "OK",
        data: output,
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async getLecturesByCourseId(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { courseId } = req.params as { courseId: string };
      const usecase = new GetLecturesByCourseIdUseCase(new LectureRepository());
      const output = await usecase.execute(courseId);
      return {
        statusCode: 200,
        message: "OK",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async getLectureBySubjects(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { subjectId } = req.params as {
        subjectId: string;
      };
      const usecase = new GetLectureSubjectsUseCase(new LectureRepository());
      const output = await usecase.execute(subjectId);
      return {
        statusCode: 200,
        message: "OK",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async createLecture(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as LectureInputDTO;
      const usecase = new CreateLectureUseCase(new LectureRepository());
      const output = await usecase.execute(body);
      reply.code(201);
      return {
        statusCode: 201,
        message: "Created Lecture",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async updateLecture(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as LectureInputDTO;
      const { lectureId } = req.params as { lectureId: string };
      const usecase = new UpdateLectureUseCase(new LectureRepository());
      const output = await usecase.execute(lectureId, body);
      return {
        statusCode: 200,
        message: "Updated Lecture",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async deleteLecture(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { lectureId } = req.params as { lectureId: string };
      const usecase = new DeleteLectureUseCase(new LectureRepository());
      const output = await usecase.execute(lectureId);
      return {
        statusCode: 200,
        message: "Deleted Lecture",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }
}

export default new LectureController();
