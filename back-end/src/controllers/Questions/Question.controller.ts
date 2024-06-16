import { FastifyReply, FastifyRequest } from "fastify";
import { QuestionRepository } from "../../repositories/Questions/Question.repository";

class QuestionController {
  async test(req: FastifyRequest, reply: FastifyReply) {
    const a = await new QuestionRepository().findManyWithWhere({
      year: [2022],
    });

    return a;
  }
}

export default new QuestionController();
