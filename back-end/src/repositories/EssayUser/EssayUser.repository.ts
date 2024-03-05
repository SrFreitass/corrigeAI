import { prisma } from "../../../prisma";
import { EssayUserInputDTO } from "../../dto/EssayUser.dto";

export class EssayUserRepository {
  async create({
    entity,
    userId,
    essay,
    themeId,
    points,
    result,
  }: EssayUserInputDTO & { points: number; result: string }) {
    return await prisma.essaysUsers.create({
      data: {
        user_id: userId,
        entity,
        essay,
        theme_id: themeId,
        points,
        result,
      },
    });
  }

  async findOne({ id }: { id: string }) {
    return await prisma.essaysUsers.findUnique({
      where: {
        id,
      },
      include: {
        Essays: {},
      },
    });
  }
}
