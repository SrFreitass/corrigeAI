import { Users } from "@prisma/client";
import { prisma } from "../../../prisma";

export class UserRepository {
  async create(item: Users) {
    const userCreated = await prisma.users.create({
      data: {
        ...item,
      },
    });

    return userCreated;
  }

  async createMany(item: Users[]) {
    throw new Error("Method not implemented.");
  }

  async update(
    id: string,
    item: {
      points?: number;
      email?: string;
      password?: string;
      role?: string;
      name?: string;
    },
  ) {
    const userUpdated = await prisma.users.update({
      where: {
        id,
      },
      data: {
        ...item,
        points: { increment: item.points },
      },
      select: {
        name: true,
        id: true,
        role: true,
        email: true,
        points: true,
      },
    });

    return userUpdated;
  }

  async updateMany(): Promise<Users[]> {
    throw new Error("Method not implemented.");
  }

  async delete(id: string) {
    throw new Error("Method not implemented");
  }

  async find() {
    const userFind = await prisma.users.findMany();
    return userFind;
  }

  async findManyWithWhere(where: { item: string }): Promise<Users[]> {
    throw new Error("Method not implemented.");
  }

  async findOne({
    id,
    item,
  }: {
    id?: string;
    item?: string;
  }): Promise<Users | null> {
    console.log(id, item);
    const user = await prisma.users.findFirst({
      where: {
        OR: [
          {
            email: { equals: item },
          },
          {
            id: { equals: id },
          },
        ],
      },
    });

    return user;
  }

  async findWithOrderBy(
    orderBy: { points: "asc" | "desc" },
    offset: number,
    limit: number,
  ): Promise<Users[]> {
    const usersOrderByPoints = await prisma.users.findMany({
      orderBy: {
        ...orderBy,
      },
    });

    return usersOrderByPoints;
  }
}
