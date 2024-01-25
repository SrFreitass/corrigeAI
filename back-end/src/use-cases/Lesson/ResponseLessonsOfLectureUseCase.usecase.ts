import { array, number, z } from "zod";
import { Lesson } from "../../database/schemas/lesson.schema";
import { ResponseLessonInputDTO } from "../../dto/ResponseLesson.dto";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";
import { AnswersRepository } from "../../repositories/Answers/Answers.repository";
import { Answer } from "../../database/schemas/answer.schema";

interface ILessonsRepliedData extends Lesson {
  correct: boolean;
}

export class ResponseLessonsOfLectureUseCase {
  constructor(private readonly lessonRepository: BaseClassRepository<Lesson>) {}

  async execute(
    userId: string,
    lectureId: string,
    data: ResponseLessonInputDTO[],
  ) {
    z.string().uuid().parse(lectureId);

    const lessons = await this.lessonRepository.findManyWithWhere({
      item: lectureId,
    });

    if (!lessons) return z.literal(false).parse(true);

    const responseSchema = z.array(
      z
        .object({
          lessonNumber: number().min(1).max(lessons.length),
          answer: number().min(1).max(5),
        })
        .strict(),
    );

    responseSchema.parse(data);

    z.literal(false, {
      errorMap: () => ({
        message: `Body is missing 'answers'`,
      }),
    }).parse(data.length < lessons.length);

    const lessonsRepliedData: ILessonsRepliedData[] = [];

    const lessonsReplied = new Set(
      data.map(({ lessonNumber }) => {
        return lessonNumber;
      }),
    );

    z.literal(false, {
      errorMap: () => ({
        message: "Lessons Replied is smaller than total Lessons of Lecture",
      }),
    }).parse(lessonsReplied.size < lessons.length);

    data.forEach((item, index) => {
      if (lessons[item.lessonNumber - 1].answer == item.answer) {
        lessonsRepliedData.push({
          ...lessons[item.lessonNumber - 1],
          correct: true,
        });
        return;
      }

      if (lessons[item.lessonNumber - 1].answer != item.answer) {
        lessonsRepliedData.push({
          ...lessons[item.lessonNumber - 1],
          correct: false,
        });
      }
    });

    const dataMap = lessonsRepliedData.map((lesson) => {
      return {
        lecture_id: lesson.lecture_id,
        lesson_id: lesson.id,
        user_id: userId,
        correct: lesson.correct,
        option: lesson.answer,
      } as Answer;
    });

    const answersRepo = new AnswersRepository();
    await answersRepo.createMany(dataMap);

    return lessonsRepliedData;
  }
}
