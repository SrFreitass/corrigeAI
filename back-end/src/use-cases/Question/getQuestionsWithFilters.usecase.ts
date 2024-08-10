import { FiltersInputDTO } from "../../dto/Filters.dto";
import { QuestionRepository } from "../../repositories/Questions/Question.repository";

export class GetQuestionsWithFiltersUseCase {
  constructor(private readonly QuestionsRepository: QuestionRepository) {}

  async execute(filters: FiltersInputDTO) {
    const years = filters.years
      ? filters.years.split(" ").map((year) => {
          return isNaN(Number(year)) ? 0 : Number(year);
        })
      : [];

    const limit = Number(filters.page) * 20;
    const offset = limit - 20;

    const questions = await this.QuestionsRepository.findManyWithWhere({
      year: years,
      test: filters.test,
      subjectId: filters.subjectId,
      offset,
      limit,
    });

    const questionsWithoutAnswers = [...questions];

    questionsWithoutAnswers.forEach((question) => {
      question.answer = "";
    });

    return questionsWithoutAnswers;
  }
}
