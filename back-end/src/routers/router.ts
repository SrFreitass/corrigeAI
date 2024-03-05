import { FastifyInstance } from "fastify";
import AuthController from "../controllers/Auth/Auth.controller";
import CourseController from "../controllers/Course/Course.controller";
import EmailController from "../controllers/Email/Email.controller";
import EssayController from "../controllers/Essay/Essay.controller";
import LectureController from "../controllers/Lecture/Lecture.controller";
import LessonController from "../controllers/Lesson/Lesson.controller";
import UserController from "../controllers/User/User.controller";
import { auth } from "../middlewares/Auth.middleware";

export class Router {
  async execute(fastify: FastifyInstance) {
    fastify.get("/api/v1/status", () => {
      return { status: "OK" };
    });
    /* User Routers */
    // fastify.get(
    //   "/api/v1/users/ranking/:page",
    //   { preHandler: [auth] },
    //   UserController.getRanking,
    // );

    /* Auth Routers */
    fastify.post("/api/v1/auth/register", AuthController.register);
    fastify.post("/api/v1/auth/login", AuthController.login);
    fastify.get(
      "/api/v1/auth/verify/token",
      { preHandler: [auth] },
      AuthController.verifyToken,
    );

    /* Lectures Routers */
    // fastify.get(
    //   "/api/v1/lectures/:page",
    //   { preHandler: [auth] },
    //   LectureController.getLecturesByPages,
    // );

    // fastify.get(
    //   "/api/v1/lectures/subjects/:subjectId",
    //   { preHandler: [auth] },
    //   LectureController.getLectureBySubjects,
    // );

    fastify.get(
      "/api/v1/lectures/:courseId",
      { preHandler: [auth] },
      LectureController.getLecturesByCourseId,
    );

    fastify.post(
      "/api/v1/lecture",
      { preHandler: [auth] },
      LectureController.createLecture,
    );

    fastify.put(
      "/api/v1/lecture/:lectureId",
      { preHandler: [auth] },
      LectureController.updateLecture,
    );
    fastify.delete(
      "/api/v1/lecture/:lectureId",
      { preHandler: [auth] },
      LectureController.deleteLecture,
    );

    /* Lesson Routers */
    fastify.get(
      "/api/v1/lesson/:id",
      { preHandler: [auth] },
      LessonController.getLessonById,
    );
    fastify.put(
      "/api/v1/lesson/:id",
      { preHandler: [auth] },
      LessonController.updateLesson,
    );
    fastify.delete(
      "/api/v1/lesson/:id",
      { preHandler: [auth] },
      LessonController.deleteLesson,
    );

    fastify.post(
      "/api/v1/lessons",
      { preHandler: [auth] },
      LessonController.createLessons,
    );

    fastify.get(
      "/api/v1/lessons/:lectureId",
      { preHandler: [auth] },
      LessonController.getLessonsByLectureId,
    );

    fastify.post(
      "/api/v1/lessons/response",
      { preHandler: [auth] },
      LessonController.responseLessonsOfLecture,
    );

    /* Email Routers */
    fastify.get("/api/v1/email/verify/:userId", EmailController.verifyEmail);

    // fastify.get(
    //   "/api/v1/user/",
    //   { preHandler: [auth] },
    //   UserController.getUsersStatistics,
    // );

    fastify.post(
      "/api/v1/user/lectures/history",
      { preHandler: [auth] },
      UserController.postLectureHistory,
    );

    /* Essay Routers */
    fastify.post(
      "/api/v1/essay",
      { preHandler: [auth] },
      EssayController.sendEssay,
    );

    fastify.get(
      "/api/v1/essay/result/:id",
      { preHandler: [auth] },
      EssayController.getEssayUserById,
    );

    fastify.post(
      "/api/v1/essay/theme",
      { preHandler: [auth] },
      EssayController.postEssayTheme,
    );

    fastify.get(
      "/api/v1/essays/:page",
      { preHandler: [auth] },
      EssayController.getEssays,
    );

    fastify.get(
      "/api/v1/essay/:entity/:essayThemeId",
      { preHandler: [auth] },
      EssayController.getEssayTheme,
    );

    fastify.get(
      "/api/v1/courses/:page",
      { preHandler: [auth] },
      CourseController.getAllCourses,
    );

    fastify.get(
      "/api/v1/courses/subjects/:typeSubject/:subjectId",
      { preHandler: [auth] },
      CourseController.findCourseBySubject,
    );

    fastify.post(
      "/api/v1/course",
      { preHandler: [auth] },
      CourseController.createCourse,
    );
  }
}
