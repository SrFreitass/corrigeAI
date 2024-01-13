import { FastifyInstance } from 'fastify';
import { AuthController } from '../controllers/Auth/Auth.controller';

export class AuthRouters {
  constructor(
    private readonly fastify: FastifyInstance,
    private readonly controller: AuthController,
  ) {}

  handle(prefix: string) {
    this.fastify.post(`${prefix}/register`, async (request, reply) => {
      return await this.controller.register(request, reply);
    });

    this.fastify.post(`${prefix}/login`, async (request, reply) => {
      return await this.controller.login(request, reply);
    });
  }
}
