import { z } from 'zod';
import { Lecture } from '../../database/schemas/lecture.schema';
import { LectureInputDTO, LectureOutputDTO } from '../../dto/Lecure.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class UpdateLectureUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lecture>,
    ) {}

    async execute(
        lectureId: string,
        lecture: LectureInputDTO,
    ): Promise<LectureOutputDTO> {
        const lectureUpdateSchema = z
            .object({
                id: z.null(),
                title: z.string().min(6).optional(),
                description: z.string().min(6).optional(),
                teacher_id: z.string().uuid().optional(),
                enemSubject_id: z.string().uuid().optional(),
                schoolSubject_id: z.string().uuid().optional(),
                image_url: z.string().optional(),
            })
            .strict();

        lectureUpdateSchema.parse(lecture);

        const lectureUpdated = await this.lectureRepository.update(lectureId, {
            item: {
                ...lecture,
            },
        });

        return lectureUpdated;
    }
}
