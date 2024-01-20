import { Lecture } from '../../database/schemas/lecture.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class DeleteLectureUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lecture>,
    ) {}

    async execute(id: string) {
        const lectureDeleted = await this.lectureRepository.delete(id);

        return lectureDeleted;
    }
}
