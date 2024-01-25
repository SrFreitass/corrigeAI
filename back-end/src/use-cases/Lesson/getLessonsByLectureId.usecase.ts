import { z } from 'zod';
import { Lesson } from '../../database/schemas/lesson.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class GetLessonsByLectureIdUseCase {
    constructor(private lessonRepository: BaseClassRepository<Lesson>) {}

    async execute(lecture_id: string): Promise<Lesson[] | null> {
        z.string().uuid().parse(lecture_id);

        const lessons = await this.lessonRepository.findManyWithWhere({
            item: lecture_id,
        });

        return lessons;
    }
}
