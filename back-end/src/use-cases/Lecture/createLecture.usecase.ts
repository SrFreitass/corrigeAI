import { z } from 'zod';
import { Lecture } from '../../database/schemas/lecture.schema';
import { LectureInputDTO, LectureOutputDTO } from '../../dto/Lecure.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class CreateLectureUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lecture>,
    ) {}

    async execute(lecture: LectureInputDTO): Promise<LectureOutputDTO> {
        const lectureSchema = z.object({
            title: z.string().min(6),
            description: z.string().min(6),
            teacher_id: z.string().uuid(),
            schoolSubject_id: z.string().uuid(),
        });

        lectureSchema.parse(lecture);

        const lectureCreated = await this.lectureRepository.create(
            lecture as Lecture,
        );

        return lectureCreated;
    }
}
