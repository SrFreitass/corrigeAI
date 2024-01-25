import { FastifyReply, FastifyRequest } from 'fastify';
import { SendEssayUseCase } from '../../use-cases/Essay/sendEssay.usecase';

class EssayController {
    async sendEssay(req: FastifyRequest, reply: FastifyReply) {
        const useCase = new SendEssayUseCase();
        const output: Promise<string> = await useCase.execute({
            essay: '',
            userId: '',
        });

        reply.send({
            statusCode: 200,
            message: 'Corrected wording',
            data: output,
        });
    }
}
export default new EssayController();
