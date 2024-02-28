import { z } from "zod";
import { ResponseLessonInputDTO } from "../../dto/ResponseLesson.dto";
import { AnswersLecturesRepository } from "../../repositories/AnswersLectures/Answers.repository";
import { LessonRepository } from "../../repositories/Lesson/Lesson.repository";
import { UserRepository } from "../../repositories/User/User.repository";

export class ResponseLessonsLectureUseCase {
  legibleUserPoints = true;
  points = 0;

  constructor(
    private readonly lessonRepository: LessonRepository,
    private readonly answersLecturesRepository: AnswersLecturesRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(userId: string, data: ResponseLessonInputDTO) {
    z.string().uuid().parse(userId);

    const lessonsResponseSchema = z.object({
      answers: z.array(z.number()),
      lectureId: z.string().uuid(),
    });

    lessonsResponseSchema.strict().parse(data);

    const lessons = await this.lessonRepository.findManyWithWhere({
      item: data.lectureId,
    });

    z.literal(true, {
      errorMap: () => ({
        message: "User answers list size is incorrect",
      }),
    }).parse(lessons.length === data.answers.length);

    const answersUser = await this.answersLecturesRepository.findManyWhere({
      userId,
      lectureId: data.lectureId,
    });

    answersUser.forEach((answer) => {
      if (answer.correct) {
        this.legibleUserPoints = false;
      }
    });

    const answerResults = lessons.map((lesson, index) => {
      const userAnswer = data.answers[index];
      const handleReturn = (bool: boolean) => {
        if (bool && this.legibleUserPoints) {
          this.points += 2;
        } else if (this.legibleUserPoints) {
          this.points += 1;
        }

        return {
          lesson_id: lesson.id,
          lecture_id: lesson.lecture_id,
          user_id: userId,
          correct: bool,
          option: userAnswer,
        };
      };

      if (lesson.answer === userAnswer) {
        return handleReturn(true);
      }
      return handleReturn(false);
    });

    await this.userRepository.update(userId, {
      points: this.points,
    });

    await this.answersLecturesRepository.createMany(answerResults);

    return {
      poinsts: this.points,
      answers: answerResults,
    };
  }
}
