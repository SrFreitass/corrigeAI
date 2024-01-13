import { FastifyReply, FastifyRequest } from 'fastify';
import { LessonService } from '../../services/Lesson/Lesson.service';
import { ILesson } from '../../models/Lesson.model';

export class LessonController {
  async getAllLessons(req: FastifyRequest, reply: FastifyReply) {
    try {
      const data = new LessonService().getAllLessons();
      reply.send({
        statusCode: 200,
        message: 'OK',
        data,
      });
    } catch (err) {
      reply.send({
        statusCode: 500,
        message: 'Internal Server Error',
        error: err,
      });
    }
  }

  async createLesson(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as ILesson;
      const service = new LessonService();
      await service.createLesson({ ...body });
      reply.send(service);
    } catch (err) {
      console.log(err);
      reply.send(err);
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
