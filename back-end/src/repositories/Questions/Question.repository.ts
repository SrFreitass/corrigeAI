import { prisma } from "../../../prisma";

export class QuestionRepository {
  async findManyWithWhere(props: {
    subjectId?: string;
    year?: number[];
    test?: string;
  }) {
    const years = props?.year?.map((year) => {
      return year === 0 ? { year } : { year: undefined };
    });
    return await prisma.questions.findMany({
      where: {
        enemSubject_id: props?.subjectId,
        entity: props?.test,
        OR: years,
      },
    });
  }
}
