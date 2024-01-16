import { FastifyInstance } from 'fastify';
import AuthController from '../controllers/Auth/Auth.controller';
import LectureController from '../controllers/Lecture/Lecture.controller';
import { auth } from '../middlewares/Auth.middleware';

export class Router {
  async handle(fastify: FastifyInstance) {
    fastify.get('/api/v1/status', () => {
      return { status: 'OK' };
    });

    fastify.post('/api/v1/auth/register', AuthController.register);
    fastify.post('/api/v1/auth/login', AuthController.login);
    fastify.get(
      '/api/v1/lectures',
      { preHandler: [auth] },
      LectureController.getAllLessons,
    );
    fastify.post(
      '/api/v1/lecture',
      { preHandler: [auth] },
      LectureController.createLecture,
    );
  }
}
