import { FastifyReply, FastifyRequest } from "fastify";
import { LoginInputDTO, RegisterInputDTO } from "../../dto/Auth.dto";
import { UserRepository } from "../../repositories/User/User.repository";
import { LoginUserUseCase } from "../../use-cases/Auth/login.usecase";
import { RegisterUserUseCase } from "../../use-cases/Auth/register.usecase";
import { errorHandling } from "../../utils/error/error.function";

class AuthController {
  async verifyToken(req: FastifyRequest, reply: FastifyReply) {
    try {
      return {
        statusCode: 200,
        message: "OK",
        data: "Token is valid",
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async register(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as RegisterInputDTO;
      const useCase = new RegisterUserUseCase(new UserRepository());
      const output = await useCase.execute({ ...body });
      reply.code(201);
      return {
        statusCode: 201,
        message: "Created",
        data: output,
      };
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async login(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as LoginInputDTO;
      const useCase = new LoginUserUseCase(new UserRepository());
      const output = await useCase.execute({ ...body });
      reply.code(200);
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

export default new AuthController();
