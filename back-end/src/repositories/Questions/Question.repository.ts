import { prisma } from "../../../prisma";

export class QuestionRepository {
  async findManyWithWhere(props: {
    year?: number[];
    test?: string;
    difficulty?: 0 | 1 | 2;
  }) {
    const years = props?.year?.map((year) => {
      return { year };
    });
    return await prisma.questions.findMany({
      where: {
        entity: props.test,
        OR: years,
      },
    });
  }
}
