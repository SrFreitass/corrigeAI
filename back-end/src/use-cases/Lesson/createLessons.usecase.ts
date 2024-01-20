import { Lesson } from '../../database/schemas/lesson.schema';
import { LessonInputDTO, LessonOutputDTO } from '../../dto/Lesson.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class CreateLessonsUseCase {
    constructor(
        private readonly lessonRepository: BaseClassRepository<Lesson>,
    ) {}
    async execute(data: {
        lessons: LessonInputDTO[];
        lectureId: string;
    }): Promise<LessonOutputDTO[]> {
        const dataMapped = data.lessons.map((lesson) => {
            return {
                ...lesson,
                lecture_id: data.lectureId,
            };
        }) as Lesson[];

        await this.lessonRepository.createMany(dataMapped);

        return dataMapped;
    }
}
