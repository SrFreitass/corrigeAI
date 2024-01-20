import { z } from 'zod';
import { Lecture } from '../../database/schemas/lecture.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class getLecturesByPagesUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lecture>,
    ) {}

    async execute(page: number) {
        z.number().positive().parse(page);

        const lectures = await this.lectureRepository.find(
            page * 20 - 20,
            page * 20,
        );

        return lectures;
    }
}
