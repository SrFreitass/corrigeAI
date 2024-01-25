import { z } from 'zod';
import { Lecture } from '../../database/schemas/lecture.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class GetLectureSubjectsUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lecture>,
    ) {}

    async execute(Subjectid: string) {
        z.string().uuid({ message: 'ID is invalid' }).parse(Subjectid);

        const lectures = await this.lectureRepository.findManyWithWhere({
            item: Subjectid,
        });

        return lectures;
    }
}
