import { Courses } from "@prisma/client";
import { prisma } from "../../../prisma";
import { BaseClassRepository } from "../BaseClass.repository";

export class CoursesRepository extends BaseClassRepository<Courses> {
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

  findManyWithWhere(where: { item: string }): Promise<Courses[] | null> {
    throw new Error("Method not implemented.");
  }

  findOne({
    id,
    item,
  }: {
    id?: string | undefined;
    item?: string | undefined;
  }): Promise<Courses | null> {
    throw new Error("Method not implemented.");
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

  findWithOrderBy(
    orderBy: { [key: string]: "asc" | "desc" } | null,
    offset: number,
    limit: number,
  ): Promise<Courses[]> {
    throw new Error("Method not implemented.");
  }

  updateMany(): Promise<
    {
      id: string;
      title: string;
      createdAt: Date;
      schoolSubject_id: string;
      enemSubject_id: string;
      updateAt: Date | null;
    }[]
  > {
    throw new Error("Method not implemented.");
  }

  delete(id: string): void {
    throw new Error("Method not implemented.");
  }

  async create(item: Courses): Promise<Courses> {
    return await prisma.courses.create({
      data: item,
    });
  }

  createMany(item: Courses[]): void {
    throw new Error("Method not implemented.");
  }
}
