import { prisma } from '../../../prisma';
import { Answers } from '@prisma/client';
import { BaseClassRepository } from '../BaseClass.repository';

export class AnswersRepository extends BaseClassRepository<Answers> {
  async find(offset: number, limit: number): Promise<Answers[]> {
    throw new Error('Method not implemented.');
  }

  async findManyWithWhere(where: { item: string }): Promise<Answers[]> {
    const answers = await prisma.answers.findMany({
      where: {
        user_id: where.item,
      },
      include: {
        Lectures: {
          include: {
            schoolSubject: true,
            enemSubject: true,
          },
        },
      },
    });

    return answers;
  }

  async findOne({
    id,
    item,
  }: {
    id?: string | undefined;
    item?: string | undefined;
  }): Promise<Answers | null> {
    throw new Error('Method not implemented.');
  }

  async update(
    id: string,
    { item }: { item?: {} | Answers | undefined },
  ): Promise<Answers> {
    throw new Error('Method not implemented.');
  }

  async updateMany(): Promise<Answers[]> {
    throw new Error('Method not implemented.');
  }

  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async createMany(item: Answers[]): Promise<void> {
    await prisma.answers.createMany({
      data: item,
    });
  }

  async create(item: Answers): Promise<Answers> {
    throw new Error('Method not implemented.');
  }
}
