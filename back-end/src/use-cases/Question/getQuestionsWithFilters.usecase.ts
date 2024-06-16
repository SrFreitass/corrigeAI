import { FiltersInputDTO } from "../../dto/Filters.dto";
import { QuestionRepository } from "../../repositories/Questions/Question.repository";

export class GetQuestionsWithFiltersUseCase {
  constructor(private readonly QuestionsRepository: QuestionRepository) {}

  async execute(filters: FiltersInputDTO) {
    const years = filters.years?.split(" ").map((year) => {
      return isNaN(Number(year)) ? 0 : Number(year);
    });

    return await this.QuestionsRepository.findManyWithWhere({
      year: years,
      test: filters.test,
      subjectId: filters.subjectId,
    });
  }
}
