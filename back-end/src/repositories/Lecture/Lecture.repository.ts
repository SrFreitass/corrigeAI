import { Lectures } from "@prisma/client";
import { prisma } from "../../../prisma";

export class LectureRepository {
  findWithOrderBy(
    orderBy: { [key: string]: "asc" | "desc" } | null,
    offset: number,
    limit: number,
  ): Promise<
    {
      id: string;
      title: string;
      description: string;
      video_url: string;
      teacher_id: string;
      createdAt: Date;
      updateAt: Date | null;
      course_id: string;
    }[]
  > {
    throw new Error("Method not implemented.");
  }

  async create(item: Lectures): Promise<Lectures> {
    const lectureCreated = await prisma.lectures.create({
      data: {
        ...item,
      },
    });

    return lectureCreated;
  }

  async updateMany(): Promise<Lectures[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<Lectures> {
    const lectureDeleted = await prisma.lectures.delete({
      where: {
        id,
      },
    });

    return lectureDeleted;
  }

  async update(
    id: string,
    { item }: { item?: Partial<Lectures> },
  ): Promise<Lectures> {
    const lectureUpdated = await prisma.lectures.update({
      where: {
        id,
      },
      data: {
        ...item,
      },
    });

    return lectureUpdated;
  }

  async createMany(item: Lectures[]): Promise<Lectures[]> {
    throw new Error("Method not implemented");
  }

  async find(offset: number, limit: number): Promise<Lectures[]> {
    const lectures = await prisma.lectures.findMany({
      skip: offset,
      take: limit,
    });

    return lectures;
  }

  async findManyWithWhere(where: {
    item: string;
    userId?: string;
  }): Promise<Lectures[]> {
    const lectures = await prisma.lectures.findMany({
      where: {
        course_id: where.item,
      },
      include: {
        Answers: {
          where: {
            user_id: where.userId,
          },
        },
        UsersLectureHistory: {
          where: {
            user_id: where.userId,
          },
        },
        Teacher: {
          select: {
            name: true,
          },
        },
        Lessons: {
          select: {
            id: true,
            title: true,
            description: true,
            options: true,
            image_url: true,
          },
        },
      },
    });

    return lectures;
  }

  async findOne({
    id,
    item,
  }: {
    id?: string;
    item?: string;
  }): Promise<Lectures | null> {
    throw new Error("Method not implemented");
    // const lecture = await prisma.lectures.findUnique();

    // return lecture;
  }
}
