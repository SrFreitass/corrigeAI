import { prisma } from "../../../prisma";
import { UserStatistics } from "../../database/schemas/userStatistics.schema";
import { BaseClassRepository } from "../BaseClass.repository";

export class UserStatisticsRepository extends BaseClassRepository<UserStatistics> {
  async find(offset: number, limit: number): Promise<UserStatistics[]> {
    throw new Error("Method not implemented.");
  }
  async findManyWithWhere(where: { item: string }): Promise<UserStatistics[]> {
    throw new Error("Method not implemented.");
  }
  async findOne({
    id,
    item,
  }: {
    id?: string | undefined;
    item?: string | undefined;
  }): Promise<UserStatistics | null> {
    throw new Error("Method not implemented.");
  }
  async update(
    id: string,
    { item }: { item?: {} | UserStatistics | undefined }
  ): Promise<UserStatistics> {
    prisma.userStatistics.update({
      where: {
        id: id,
      },
      data: {
        ...item,
      },
    });
    throw new Error("Method not implemented.");
  }
  async updateMany(): Promise<UserStatistics[]> {
    throw new Error("Method not implemented.");
  }
  async createMany(item: UserStatistics[]): Promise<void> {
    await prisma.userStatistics.createMany({
      data: item,
    });
  }

  async create(item: UserStatistics): Promise<UserStatistics> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string): Promise<void> {}
}
