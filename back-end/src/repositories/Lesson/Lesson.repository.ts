import { prisma } from '../../../prisma';
import { BaseClassRepository } from '../BaseClass.repository';
import { Lessons } from '@prisma/client';

export class LessonRepository implements BaseClassRepository<Lessons> {
  async find(): Promise<Lessons[]> {
    const lessons = await prisma.lessons.findMany();

    return lessons;
  }

  async findManyWithWhere(where: { item: string }): Promise<Lessons[]> {
    const lessons = await prisma.lessons.findMany({
      where: {
        lecture_id: where.item,
      },
      include: {
        lecture: true,
      },
    });

    return lessons;
  }

  findOne({
    id,
    item,
  }: {
    id?: string | undefined;
    item?: string | undefined;
  }): Promise<Lessons | null> {
    throw new Error('Method not implemented.');
  }

  async create(item: Lessons): Promise<Lessons> {
    throw new Error('Method not implemented.');
  }

  async createMany(item: Lessons[]): Promise<Lessons[]> {
    await prisma.lessons.createMany({
      data: item,
    });

    return item;
  }

  async update(
    id: string,
    { item }: { item?: {} | Lessons },
  ): Promise<Lessons> {
    const lessonUpdated = await prisma.lessons.update({
      where: {
        id,
      },
      data: {
        ...item,
      },
    });

    return lessonUpdated;
  }

  async updateMany(): Promise<Lessons[]> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<Lessons> {
    return {} as Lessons;
  }
}
