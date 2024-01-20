import { Lesson } from '../../database/schemas/lesson.schema';
import { LessonInputDTO } from '../../dto/Lesson.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class UpdateLessonUseCase {
    constructor(
        private readonly lessonRepository: BaseClassRepository<Lesson>,
    ) {}
    async execute(id: string, data: LessonInputDTO) {
        const lesson = await this.lessonRepository.update(id, {
            item: {
                ...data,
            },
        });
        return lesson;
    }
}
