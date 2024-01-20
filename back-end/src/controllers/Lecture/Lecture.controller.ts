import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateLectureUseCase } from '../../use-cases/Lecture/createLecture.usecase';
import { LectureRepository } from '../../repositories/Lecture/Lecture.repository';
import { ZodError } from 'zod';
import { LectureInputDTO } from '../../dto/Lecure.dto';
import { UpdateLectureUseCase } from '../../use-cases/Lecture/updateLecture.usecase';
import { GetLectureByIdUseCase } from '../../use-cases/Lecture/getLectureById.usecase';
import { errorHandling } from '../../utils/error/error.function';
import { DeleteLectureUseCase } from '../../use-cases/Lecture/deleteLecture.usecase';
import { getLecturesByPagesUseCase } from '../../use-cases/Lecture/getLecturesByPages.usecase';

class LectureController {
    async getLecturesByPages(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { page } = req.params as { page: number };
            const usecase = new getLecturesByPagesUseCase(
                new LectureRepository(),
            );
            const output = await usecase.execute(Number(page));
            reply.send({
                statusCode: 200,
                message: 'OK',
                data: output,
            });
        } catch (error) {
            errorHandling(error, reply);
        }
    }

    async createLecture(req: FastifyRequest, reply: FastifyReply) {
        try {
            const body = req.body as LectureInputDTO;
            const usecase = new CreateLectureUseCase(new LectureRepository());
            const output = await usecase.execute(body);
            reply.code(201);
            return {
                statusCode: 201,
                message: 'Created Lecture',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }

    async updateLecture(req: FastifyRequest, reply: FastifyReply) {
        try {
            const body = req.body as LectureInputDTO;
            const { lectureId } = req.params as { lectureId: string };
            const usecase = new UpdateLectureUseCase(new LectureRepository());
            const output = await usecase.execute(lectureId, body);
            reply.send({
                statusCode: 200,
                message: 'Updated Lecture',
                data: output,
            });
        } catch (error) {
            errorHandling(error, reply);
        }
    }
    async deleteLecture(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { lectureId } = req.params as { lectureId: string };
            const usecase = new DeleteLectureUseCase(new LectureRepository());
            const output = await usecase.execute(lectureId);
            reply.send({
                statusCode: 200,
                message: 'Deleted Lecture',
                data: output,
            });
        } catch (error) {
            errorHandling(error, reply);
        }
    }
    async getLecture(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { lectureId } = req.params as { lectureId: string };
            const usecase = new GetLectureByIdUseCase(new LectureRepository());
            const output = await usecase.execute(lectureId);
            reply.send({
                statusCode: 200,
                message: 'OK',
                data: output,
            });
        } catch (error) {
            errorHandling(error, reply);
        }
    }
}

export default new LectureController();
