import { Lesson } from '../../database/schemas/lesson.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class GetLessonsByLectureUseCase {
    constructor(private lessonRepository: BaseClassRepository<Lesson>) {}

    async execute(lecture_id: string): Promise<Lesson[]> {
        const lessons = await this.lessonRepository.findManyWithWhere({
            item: lecture_id,
        });

        return lessons;
    }
}
