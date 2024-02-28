import { Courses } from "@prisma/client";
import { prisma } from "../../../prisma";

export class CoursesRepository {
  async find(offset: number, limit: number): Promise<Courses[]> {
    return await prisma.courses.findMany({
      skip: offset,
      take: limit,
      include: {
        schoolSubject: {
          include: {
            enemsubjects: {},
          },
        },
      },
    });
  }

  async findManyWithWhere(where: { item: string }) {
    return await prisma.courses.findMany({
      where: {
        schoolSubject_id: where.item,
      },
    });
  }

  async findOne({
    id,
    item,
  }: {
    id?: string | undefined;
    item?: string | undefined;
  }): Promise<Courses | null> {
    return await prisma.courses.findUnique({
      where: {
        id,
      },
    });
  }

  update(
    id: string,
    {
      item,
    }: {
      item?: Courses;
    },
  ): Promise<Courses> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string) {
    return await prisma.courses.delete({
      where: {
        id,
      },
    });
  }

  async create(item: Courses) {
    return await prisma.courses.create({
      data: item,
    });
  }
}
