import { FastifyReply, FastifyRequest } from 'fastify';
import { LessonService } from '../../services/Lesson/Lesson.service';
import { ILesson } from '../../models/Lesson.model';
import { ILecture } from '../../models/Lecure.model';
import { LectureService } from '../../services/Lecture/Lecture.service';

class LectureController {
  async getAllLessons(req: FastifyRequest, reply: FastifyReply) {
    // try {
    //   const data = new LessonService().getAllLessons();
    //   reply.send({
    //     statusCode: 200,
    //     message: 'OK',
    //     data,
    //   });
    // } catch (err) {
    //   reply.send({
    //     statusCode: 500,
    //     message: 'Internal Server Error',
    //     error: err,
    //   });
    // }
  }

  async createLecture(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as ILecture;
      const service = new LectureService();
      const lecture = await service.create({ ...body });
      reply.send(lecture);
    } catch (err) {
      reply.send({
        statusCode: 500,
        message: 'Internal Server Error',
        error: err,
      });
    }
  }

  async updateLesson(req: FastifyRequest, reply: FastifyReply) {
    reply.send({});
  }
  async deleteLesson(req: FastifyRequest, reply: FastifyReply) {
    reply.send({});
  }
  async getLesson(req: FastifyRequest, reply: FastifyReply) {
    reply.send({});
  }
}

export default new LectureController();
