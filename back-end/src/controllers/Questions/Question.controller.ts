import { FastifyReply, FastifyRequest } from "fastify";
import { FiltersInputDTO } from "../../dto/Filters.dto";
import { QuestionRepository } from "../../repositories/Questions/Question.repository";
import { GetQuestionsWithFiltersUseCase } from "../../use-cases/Question/getQuestionsWithFilters.usecase";
import { errorHandling } from "../../utils/error/error.function";

class QuestionController {
  async getQuestionsWithFilters(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.query as FiltersInputDTO;
      const useCase = new GetQuestionsWithFiltersUseCase(
        new QuestionRepository(),
      );
      const output = await useCase.execute(body);
      return {
        statusCode: 200,
        message: "OK",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }
}

export default new QuestionController();
