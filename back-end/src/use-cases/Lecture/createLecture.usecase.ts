import { z } from 'zod';
import { Lecture } from '../../database/schemas/lecture.schema';
import { LectureInputDTO, LectureOutputDTO } from '../../dto/Lecure.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { SchoolSubjectRepository } from '../../repositories/SchoolSubjects/SchoolSubjects.repository';

export class CreateLectureUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lecture>,
    ) {}

    async execute(lecture: LectureInputDTO): Promise<LectureOutputDTO> {
        console.log(lecture);

        const lectureSchema = z
            .object({
                title: z.string().min(6),
                description: z.string().min(6),
                teacher_id: z.string().uuid(),
                enemSubject_id: z.string().uuid(),
                schoolSubject_id: z.string().uuid(),
                image_url: z.string().min(8).optional(),
            })
            .strict();

        lectureSchema.parse(lecture);

        const schoolSubjectRepository = new SchoolSubjectRepository();
        const subject = await schoolSubjectRepository.findOne({
            id: lecture.schoolSubject_id,
        });

        z.literal(subject?.enemSubject_id != lecture.enemSubject_id, {
            errorMap: () => ({
                message: "School Subject don't match with ENEM subject",
            }),
        }).parse(false);

        const lectureCreated = await this.lectureRepository.create(
            lecture as Lecture,
        );

        return lectureCreated;
    }
}
