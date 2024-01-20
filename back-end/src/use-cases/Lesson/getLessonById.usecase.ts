import { z } from 'zod';
import { Lesson } from '../../database/schemas/lesson.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { LessonOutputDTO } from '../../dto/Lesson.dto';

export class GetLessonByIdUseCase {
    constructor(
        private readonly lessonRepository: BaseClassRepository<Lesson>,
    ) {}

    async execute(lessonId: string): Promise<LessonOutputDTO | null> {
        z.string().uuid().parse(lessonId);

        const lesson = this.lessonRepository.findOne({ id: lessonId });

        return lesson;
    }
}
