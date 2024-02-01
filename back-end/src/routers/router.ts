import { FastifyInstance } from 'fastify';
import AuthController from '../controllers/Auth/Auth.controller';
import LectureController from '../controllers/Lecture/Lecture.controller';
import { auth } from '../middlewares/Auth.middleware';
import LessonController from '../controllers/Lesson/Lesson.controller';
import EmailController from '../controllers/Email/Email.controller';
import UserController from '../controllers/User/User.controller';
import EssayController from '../controllers/Essay/Essay.controller';

export class Router {
  async handle(fastify: FastifyInstance) {
    fastify.get('/api/v1/status', () => {
      return { status: 'OK' };
    });

    /* Auth Routers */
    fastify.post('/api/v1/auth/register', AuthController.register);
    fastify.post('/api/v1/auth/login', AuthController.login);

    /* Lectures Routers */
    fastify.get(
      '/api/v1/lectures/:page',
      { preHandler: [auth] },
      LectureController.getLecturesByPages,
    );

    fastify.get(
      '/api/v1/lectures/subjects/:subjectId',
      { preHandler: [auth] },
      LectureController.getLectureBySubjects,
    );

    fastify.get(
      '/api/v1/lecture/:lectureId',
      { preHandler: [auth] },
      LectureController.getLecture,
    );
    fastify.post(
      '/api/v1/lecture',
      { preHandler: [auth] },
      LectureController.createLecture,
    );
    fastify.put(
      '/api/v1/lecture/:lectureId',
      { preHandler: [auth] },
      LectureController.updateLecture,
    );
    fastify.delete(
      '/api/v1/lecture/:lectureId',
      { preHandler: [auth] },
      LectureController.deleteLecture,
    );

    /* Lesson Routers */
    fastify.get(
      '/api/v1/lesson/:id',
      { preHandler: [auth] },
      LessonController.getLessonById,
    );
    fastify.put(
      '/api/v1/lesson/:id',
      { preHandler: [auth] },
      LessonController.updateLesson,
    );
    fastify.delete(
      '/api/v1/lesson/:id',
      { preHandler: [auth] },
      LessonController.deleteLesson,
    );

    fastify.post(
      '/api/v1/lessons/:lectureId',
      { preHandler: [auth] },
      LessonController.createLessons,
    );

    fastify.get(
      '/api/v1/lessons/:lectureId',
      { preHandler: [auth] },
      LessonController.getLessonsByLectureId,
    );

    fastify.post(
      '/api/v1/lecture/response/:lectureId',
      { preHandler: [auth] },
      LessonController.responseLessonsOfLecture,
    );

    /* Email Routers */
    fastify.get('/api/v1/email/verify/:userId', EmailController.verifyEmail);

    fastify.get(
      '/api/v1/user/',
      { preHandler: [auth] },
      UserController.getUsersStatistics,
    );

    /* Essay Routers */
    fastify.post(
      '/api/v1/essay',
      { preHandler: [auth] },
      EssayController.sendEssay,
    );
  }
}
