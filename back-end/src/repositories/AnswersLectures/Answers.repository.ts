import { prisma } from "../../../prisma";

export class AnswersLecturesRepository {
  async findManyWhere({
    userId,
    lectureId,
  }: {
    userId: string;
    lectureId: string;
  }) {
    return await prisma.answersLectures.findMany({
      where: {
        AND: [
          {
            user_id: userId,
          },
          {
            lecture_id: lectureId,
          },
        ],
      },
    });
  }

  async createMany(
    data: {
      user_id: string;
      lecture_id: string;
      lesson_id: string;
      correct: boolean;
      option: number;
    }[],
  ) {
    return await prisma.answersLectures.createMany({
      data,
    });
  }
}
