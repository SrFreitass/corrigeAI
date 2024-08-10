import { prisma } from "../../../prisma";

export class QuestionRepository {
  async findManyWithWhere(props: {
    subjectId?: string;
    year?: number[];
    test?: string;
    offset: number;
    limit: number;
  }) {
    const years = props?.year?.map((year) => {
      return year === 0 ? { year: undefined } : { year };
    });

    return await prisma.questions.findMany({
      skip: props.offset,
      take: props.limit,

      where: {
        enemSubject_id: props?.subjectId,
        entity: props?.test,
        OR: years?.length ? [...years] : undefined,
      },
    });
  }
}
