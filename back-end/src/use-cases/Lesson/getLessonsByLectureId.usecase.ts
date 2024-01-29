import { z } from 'zod';
import { Lessons } from '@prisma/client';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class GetLessonsByLectureIdUseCase {
    constructor(private lessonRepository: BaseClassRepository<Lessons>) {}

    async execute(lecture_id: string): Promise<Lessons[] | null> {
        z.string().uuid().parse(lecture_id);

        const lessons = await this.lessonRepository.findManyWithWhere({
            item: lecture_id,
        });

        return lessons;
    }
}
