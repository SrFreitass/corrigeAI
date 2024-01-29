import { Lectures } from '@prisma/client';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class DeleteLectureUseCase {
    constructor(
        private readonly lectureRepository: BaseClassRepository<Lectures>,
    ) {}

    async execute(id: string) {
        const lectureDeleted = await this.lectureRepository.delete(id);

        return lectureDeleted;
    }
}
