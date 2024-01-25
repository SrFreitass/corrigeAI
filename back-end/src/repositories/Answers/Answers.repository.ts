import { prisma } from "../../../prisma";
import { Answer } from "../../database/schemas/answer.schema";
import { BaseClassRepository } from "../BaseClass.repository";

export class AnswersRepository extends BaseClassRepository<Answer> {
  async find(offset: number, limit: number): Promise<Answer[]> {
    throw new Error("Method not implemented.");
  }

  async findManyWithWhere(where: { item: string }): Promise<Answer[]> {
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
  }): Promise<Answer | null> {
    throw new Error("Method not implemented.");
  }

  async update(
    id: string,
    { item }: { item?: {} | Answer | undefined },
  ): Promise<Answer> {
    throw new Error("Method not implemented.");
  }

  async updateMany(): Promise<Answer[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async createMany(item: Answer[]): Promise<void> {
    await prisma.answers.createMany({
      data: item,
    });
  }

  async create(item: Answer): Promise<Answer> {
    throw new Error("Method not implemented.");
  }
}
