import { z } from 'zod';
import { Lessons } from '@prisma/client';
import { LessonInputDTO, LessonOutputDTO } from '../../dto/Lesson.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class CreateLessonsUseCase {
    constructor(
        private readonly lessonRepository: BaseClassRepository<Lessons>,
    ) {}
    async execute(
        lectureId: string,
        data: {
            lessons: LessonInputDTO[];
        },
    ): Promise<LessonOutputDTO[]> {
        const lessonSchema = z.array(
            z
                .object({
                    title: z.string().min(6),
                    description: z.string().min(6),
                    lecture_id: z.string().uuid(),
                    image_url: z.string().min(8).optional(),
                    options: z.string().array().min(5).max(5),
                    answer: z.number().min(1).max(5),
                    answer_text: z.string().optional(),
                    answer_img_url: z.string().optional(),
                })
                .strict(),
        );

        lessonSchema.parse(data.lessons);
        const { lessons } = data as { lessons: Lessons[] };

        await this.lessonRepository.createMany(lessons);

        return lessons;
    }
}
