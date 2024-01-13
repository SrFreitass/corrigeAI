import { FastifyInstance } from 'fastify';
import { LessonController } from '../controllers/Lesson/Lesson.controller';
import { auth } from '../middlewares/Auth';

export class LessonRouters {
  constructor(
    private readonly fastify: FastifyInstance,
    private readonly controller: LessonController,
  ) {}
  async handle(prefix: string) {
    this.fastify.get(
      `${prefix}/lessons`,
      { preHandler: [auth] },
      async (req, reply) => {
        return await this.controller.getAllLessons(req, reply);
      },
    );

    this.fastify.post(`${prefix}/lesson`, async (req, reply) => {
      return await this.controller.createLesson(req, reply);
    });

    this.fastify.patch(`${prefix}/lesson/:id`, async (req, reply) => {
      return await this.controller.updateLesson(req, reply);
    });
  }
}
