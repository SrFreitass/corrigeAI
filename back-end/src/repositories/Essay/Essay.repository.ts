import { Essays } from "@prisma/client";
import { prisma } from "../../../prisma";
import { EssayThemeInputDTO } from "../../dto/EssayTheme.dto";

export class EssayRepository {
  async find(offset: number, limit: number) {
    return await prisma.essays.findMany({
      skip: offset,
      take: limit,
    });
  }

  findManyWithWhere(where: { item: string }): Promise<Essays[] | null> {
    throw new Error("Method not implemented.");
  }

  async findOne({ id, entity }: { id?: string; entity?: string }) {
    return await prisma.essays.findUnique({
      where: {
        id,
        AND: [
          {
            entity,
          },
        ],
      },
    });
  }

  update(
    id: string,
    {
      item,
    }: {
      item?: {} | Essays | undefined;
    },
  ): Promise<Essays> {
    throw new Error("Method not implemented.");
  }

  updateMany(): Promise<Essays[]> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): void {
    throw new Error("Method not implemented.");
  }

  async create({
    entity,
    essayImg,
    texts,
    title,
    year,
    figures,
  }: EssayThemeInputDTO) {
    const essay = await prisma.essays.create({
      data: {
        title,
        entity,
        essay_img: essayImg,
        year,
        texts,
        figures,
      },
    });

    return essay;
  }

  createMany(
    item: {
      id: string;
      user_id: string;
      createdAt: Date;
      essay: string;
      points: number;
    }[],
  ): void {
    throw new Error("Method not implemented.");
  }
}
