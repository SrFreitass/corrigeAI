import { FastifyReply, FastifyRequest } from "fastify";
import { UsersLectureHistoryRepository } from "../../repositories/UsersLectureHistory/UsersLectureHistory.repository";
import { PostLectureHistory } from "../../use-cases/User/postLectureHistory";
import { errorHandling } from "../../utils/error/error.function";

class UserController {
  async postLectureHistory(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as { courseId: string; lectureId: string };
      const userId = req.headers.userId as string;
      const useCase = new PostLectureHistory(
        new UsersLectureHistoryRepository(),
      );
      const output = await useCase.execute({
        userId,
        ...body,
      });
      reply.send({
        message: "OK",
        data: output,
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  // async getRanking(req: FastifyRequest, reply: FastifyReply) {
  //   try {
  //     const { page } = req.params as { page: number };
  //     const useCase = new GetUsersByRankingUseCase(new UserRepository());
  //     const output = await useCase.execute(page);
  //     reply.send({
  //       message: "OK",
  //       data: output,
  //     });
  //   } catch (error) {
  //     errorHandling(error, reply);
  //   }
  // }

  // async getUsersStatistics(req: FastifyRequest, reply: FastifyReply) {
  //   try {
  //     const userId = req.headers.userId as string;
  //     const useCase = new GetUsersStatisticsUseCase(
  //       new UserRepository(),
  //       new AnswersLecturesRepository(),
  //     );
  //     const output = await useCase.execute(userId);
  //     reply.send({
  //       message: "OK",
  //       data: output,
  //     });
  //   } catch (error) {
  //     errorHandling(error, reply);
  //   }
  // }
}

export default new UserController();
