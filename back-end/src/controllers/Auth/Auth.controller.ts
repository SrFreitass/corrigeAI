import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from '../../services/Auth/Auth.service';
import { IRegister } from '../../models/Auth.model';

export class AuthController {
  async register(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as IRegister;
      const authService = new AuthService();
      const data = await authService.register({ ...body });
      reply
        .send({
          statusCode: 201,
          message: 'Created',
          data,
        })
        .status(500);
    } catch (error) {
      reply.status(500);
      return {
        statusCode: 500,
        error: error,
        data: [],
      };
    }
  }

  async login(req: FastifyRequest, reply: FastifyReply) {
    const token = req.headers['x-access-token'];
    const authService = new AuthService();
  }
}
