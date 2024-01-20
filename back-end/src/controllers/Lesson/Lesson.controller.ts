import { FastifyReply, FastifyRequest } from 'fastify';
import { LessonRepository } from '../../repositories/Lesson/Lesson.repository';
import { ZodError } from 'zod';
import { errorHandling } from '../../utils/error/error.function';
import { CreateLessonsUseCase } from '../../use-cases/Lesson/createLessons.usecase';
import { LessonInputDTO } from '../../dto/Lesson.dto';
import { GetLessonByIdUseCase } from '../../use-cases/Lesson/getLessonById.usecase';
import { GetLessonsByLectureUseCase } from '../../use-cases/Lesson/getLessonsByLecture.usecase';
import { UpdateLessonUseCase } from '../../use-cases/Lesson/updateLesson.usecase';
import { DeleteLectureUseCase } from '../../use-cases/Lecture/deleteLecture.usecase';
import { LectureRepository } from '../../repositories/Lecture/Lecture.repository';

class LessonController {
    async createLessons(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { lectureId } = req.params as { lectureId: string };
            const body = req.body as LessonInputDTO[];
            const usecase = new CreateLessonsUseCase(new LessonRepository());
            const output = usecase.execute({ lectureId, lessons: body });
            reply.code(201);
            return {
                statusCode: 201,
                message: 'Created Lessons in lecture',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }

    async updateLesson(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { lectureId } = req.params as { lectureId: string };
            const body = req.body as LessonInputDTO;
            const usecase = new UpdateLessonUseCase(new LessonRepository());
            const output = usecase.execute(lectureId, {
                ...body,
            });
            reply.code(201);
            return {
                statusCode: 201,
                message: 'Created Lessons in lecture',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }
    async deleteLesson(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { lectureId } = req.params as { lectureId: string };
            const usecase = new DeleteLectureUseCase(new LectureRepository());
            const output = usecase.execute(lectureId);
            return {
                statusCode: 200,
                message: 'Deleted Lesson',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }

    async getLessonById(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { id } = req.params as { id: string };
            const usecase = new GetLessonByIdUseCase(new LessonRepository());
            const output = await usecase.execute(id);
            return {
                statusCode: 200,
                message: 'OK',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }

    async getLessonsByLectureId(req: FastifyRequest, reply: FastifyReply) {
        try {
            const { lectureId } = req.params as { lectureId: string };
            const usecase = new GetLessonsByLectureUseCase(
                new LessonRepository(),
            );
            const output = await usecase.execute(lectureId);
            return {
                statusCode: 200,
                message: 'OK',
                data: output,
            };
        } catch (error) {
            errorHandling(error, reply);
        }
    }
}

export default new LessonController();
