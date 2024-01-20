import { z } from 'zod';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { Lecture } from '../../database/schemas/lecture.schema';
import { LectureOutputDTO } from '../../dto/Lecure.dto';

export class GetLectureByIdUseCase {
    constructor(private lectureRepository: BaseClassRepository<Lecture>) {}

    async execute(id: string): Promise<LectureOutputDTO | null> {
        z.string().uuid().parse(id);

        const lecture = await this.lectureRepository.findOne({ id });

        return lecture;
    }
}
