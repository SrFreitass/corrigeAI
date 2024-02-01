import { FastifyReply, FastifyRequest } from 'fastify';
import { SendEssayUseCase } from '../../use-cases/Essay/sendEssay.usecase';
import { EssayRepository } from '../../repositories/Essay/Essay.repository';
import { EssayInputDTO } from '../../dto/Essay.dto';
import { errorHandling } from '../../utils/error/error.function';

class EssayController {
  async sendEssay(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { essayContent, userId, theme } = req.body as EssayInputDTO;
      const useCase = new SendEssayUseCase(new EssayRepository());
      const output = await useCase.execute({
        essayContent,
        theme,
        userId,
      });

      reply.send({
        statusCode: 200,
        message: 'Corrected wording',
        data: output,
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }
}
export default new EssayController();
