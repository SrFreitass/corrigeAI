import { z } from "zod";
import { UsersLectureHistoryRepository } from "../../repositories/UsersLectureHistory/UsersLectureHistory.repository";

export class PostLectureHistory {
  constructor(
    private readonly usersLectureHistoryRepository: UsersLectureHistoryRepository,
  ) {}

  async execute({
    courseId,
    lectureId,
    userId,
  }: {
    courseId: string;
    lectureId: string;
    userId: string;
  }) {
    const bodySchama = z.object({
      courseId: z.string().uuid(),
      lectureId: z.string().uuid(),
      userId: z.string().uuid(),
    });

    bodySchama.strict().parse({ courseId, lectureId, userId });

    const attendedLectures = await this.usersLectureHistoryRepository.find({
      courseId,
      userId,
    });

    attendedLectures.forEach((lecture) => {
      if (lecture.lecture_id === lectureId) {
        z.literal(true, {
          errorMap: () => ({
            message: "LectureId is invalid, already exists!",
          }),
        }).parse(false);
      }
    });

    await this.usersLectureHistoryRepository.create({
      courseId,
      lectureId,
      userId,
    });
  }
}
