import { FiltersInputDTO } from "../../dto/Filters.dto";
import { QuestionRepository } from "../../repositories/Questions/Question.repository";

export class GetQuestionsWithFiltersUseCase {
  constructor(private readonly QuestionsRepository: QuestionRepository) {}

  async execute(filters: FiltersInputDTO) {
    return await this.QuestionsRepository.findManyWithWhere(filters);
  }
}
