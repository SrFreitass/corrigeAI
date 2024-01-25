import { z } from 'zod';
import { Answer } from '../../database/schemas/answer.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class getAnswerByLectureIdUseCase {
    constructor(
        private readonly AnswerRepository: BaseClassRepository<Answer>,
    ) {}

    async execute(userId: string) {
        z.string().uuid().parse(userId);

        const answers = await this.AnswerRepository.findManyWithWhere({
            item: userId,
        });

        return answers;
    }
}
