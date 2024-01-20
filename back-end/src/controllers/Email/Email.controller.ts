import { FastifyReply, FastifyRequest } from 'fastify';
import { UserRepository } from '../../repositories/User/User.repository';
import { VerifyEmailUseCase } from '../../use-cases/Email/verifyEmail.usecase';
import { errorHandling } from '../../utils/error/error.function';

class EmailController {
    async verifyEmail(req: FastifyRequest, reply: FastifyReply) {
        try {
            const params = req.params as { userId: string };
            const usecase = new VerifyEmailUseCase(new UserRepository());
            const output = await usecase.execute(params.userId);
            return {
                statusCode: 200,
                message: 'E-mail verified',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }
}

export default new EmailController();
