import { FastifyReply, FastifyRequest } from "fastify";
import { EssayInputDTO } from "../../dto/Essay.dto";
import { EssayThemeInputDTO } from "../../dto/EssayTheme.dto";
import { EssayRepository } from "../../repositories/Essay/Essay.repository";
import { GetEssayThemeByIdUseCase } from "../../use-cases/Essay/getEssayThemeById.usecase";
import { GetEssaysByPage } from "../../use-cases/Essay/getEssaysByPage.usecase";
import { PostEssayThemeUseCase } from "../../use-cases/Essay/postEssayTheme.usecase";
import { SendEssayUseCase } from "../../use-cases/Essay/sendEssay.usecase";
import { errorHandling } from "../../utils/error/error.function";

class EssayController {
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
      const { essayContent, userId, theme } = req.body as EssayInputDTO;
      const useCase = new SendEssayUseCase(new EssayRepository());
      const output = await useCase.execute({
        essayContent,
        theme,
        userId,
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
