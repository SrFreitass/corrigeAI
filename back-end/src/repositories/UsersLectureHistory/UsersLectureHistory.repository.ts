import { prisma } from "../../../prisma";

export class UsersLectureHistoryRepository {
  async create({
    lectureId,
    userId,
    courseId,
  }: {
    lectureId: string;
    userId: string;
    courseId: string;
  }) {
    return await prisma.usersLectureHistory.create({
      data: {
        lecture_id: lectureId,
        user_id: userId,
        course_id: courseId,
      },
    });
  }

  async find({ courseId, userId }: { courseId: string; userId: string }) {
    return await prisma.usersLectureHistory.findMany({
      where: {
        AND: [
          {
            course_id: courseId,
          },
          {
            user_id: userId,
          },
        ],
      },
    });
  }
}
