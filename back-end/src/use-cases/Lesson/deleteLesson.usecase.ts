import { Lessons } from '@prisma/client';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class DeleteLessonUseCase {
    constructor(private lessonRepository: BaseClassRepository<Lessons>) {}

    async execute(id: string) {
        const lessonDeleted = await this.lessonRepository.delete(id);

        return lessonDeleted;
    }
}
