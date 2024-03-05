import { FastifyReply, FastifyRequest } from "fastify";
import { EssayThemeInputDTO } from "../../dto/EssayTheme.dto";
import { EssayUserInputDTO } from "../../dto/EssayUser.dto";
import { EssayRepository } from "../../repositories/Essay/Essay.repository";
import { EssayUserRepository } from "../../repositories/EssayUser/EssayUser.repository";
import { GetEssayThemeByIdUseCase } from "../../use-cases/Essay/getEssayThemeById.usecase";
import { GetEssayUserByIdUseCase } from "../../use-cases/Essay/getEssayUserById.usecase";
import { GetEssaysByPage } from "../../use-cases/Essay/getEssaysByPage.usecase";
import { PostEssayThemeUseCase } from "../../use-cases/Essay/postEssayTheme.usecase";
import { SendEssayUseCase } from "../../use-cases/Essay/sendEssay.usecase";
import { errorHandling } from "../../utils/error/error.function";

class EssayController {
  async getEssayUserById(req: FastifyRequest, reply: FastifyReply) {
    try {
      const params = req.params as { id: string };
      const useCase = new GetEssayUserByIdUseCase(new EssayUserRepository());
      const output = await useCase.execute(params.id);
      reply.send({
        statusCode: 200,
        message: "Corrected wording",
        data: output || "",
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async getEssayTheme(req: FastifyRequest, reply: FastifyReply) {
    try {
      const params = req.params as { essayThemeId: string; entity: string };
      const useCase = new GetEssayThemeByIdUseCase(new EssayRepository());
      const output = await useCase.execute({ ...params });
      reply.send({
        statusCode: 200,
        message: "OK",
        data: output || "",
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async postEssayTheme(req: FastifyRequest, reply: FastifyReply) {
    try {
      const body = req.body as EssayThemeInputDTO;
      const useCase = new PostEssayThemeUseCase(new EssayRepository());
      const output = await useCase.execute(body);
      reply.send({
        statusCode: 200,
        message: "OK",
        data: output || "",
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async getEssays(req: FastifyRequest, reply: FastifyReply) {
    try {
      const params = req.params as { page: number };
      const useCase = new GetEssaysByPage(new EssayRepository());
      const output = await useCase.execute(Number(params.page));
      reply.send({
        statusCode: 200,
        message: "OK",
        data: output,
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }

  async sendEssay(req: FastifyRequest, reply: FastifyReply) {
    try {
      const userId = req.headers.userId as string;
      const body = req.body as EssayUserInputDTO;
      const useCase = new SendEssayUseCase(
        new EssayUserRepository(),
        new EssayRepository(),
      );
      const output = await useCase.execute({
        userId,
        entity: body.entity,
        essay: body.essay,
        themeId: body.themeId,
      });

      reply.send({
        statusCode: 200,
        message: "Corrected wording",
        data: output,
      });
    } catch (error) {
      errorHandling(error, reply);
    }
  }
}
export default new EssayController();
