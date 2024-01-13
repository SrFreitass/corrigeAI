import { FastifyInstance } from 'fastify';
import { LessonRouters } from './Lesson.routes';
import { LessonController } from '../controllers/Lesson/Lesson.controller';
import { AuthController } from '../controllers/Auth/Auth.controller';
import { AuthRouters } from './Auth.routes';

export class Router {
  constructor(private readonly fastify: FastifyInstance) {}

  async handle() {
    const lessonRouters = new LessonRouters(
      this.fastify,
      new LessonController(),
    );

    const authRouters = new AuthRouters(this.fastify, new AuthController());

    authRouters.handle('/api/v1/auth');
    lessonRouters.handle('/api/v1');
  }
}
