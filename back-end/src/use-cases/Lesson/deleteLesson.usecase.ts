import { Lesson } from '../../database/schemas/lesson.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class DeleteLessonUseCase {
    constructor(private lessonRepository: BaseClassRepository<Lesson>) {}

    async execute(id: string) {
        const lessonDeleted = await this.lessonRepository.delete(id);

        return lessonDeleted;
    }
}
