import { FastifyReply, FastifyRequest } from 'fastify';
import { AuthService } from '../../services/Auth/Auth.service';
import { ILogin, IRegister } from '../../models/Auth.model';
import { AuthRepository } from '../../repositories/Auth/Auth.repository';
import { ZodError, ZodIssue } from 'zod';

class AuthController {
  async register(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as IRegister;
      const authService = new AuthService(new AuthRepository());
      const data = await authService.register({ ...body });
      reply.code(201);
      return {
        statusCode: 201,
        message: 'Created',
        data,
      };
    } catch (error) {
      error instanceof ZodError ? reply.status(400) : reply.status(500);
      return {
        statusCode: error instanceof ZodError ? 400 : 500,
        error: error || 'Unexpected error',
        data: [],
      };
    }
  }

  async login(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as ILogin;
      const authService = new AuthService(new AuthRepository());
      const data = await authService.login({ ...body });
      reply.code(200);
      return {
        statusCode: 200,
        message: 'OK',
        data,
      };
    } catch (error) {
      console.error(error);
      error instanceof ZodError ? reply.status(400) : reply.status(500);
      return {
        statusCode: error instanceof ZodError ? 400 : 500,
        error: error || 'Unexpected error',
        data: [],
      };
    }
  }
}

export default new AuthController();
