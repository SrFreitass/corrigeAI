import { prisma } from '../../../prisma';
import { ILecture } from '../../models/Lecure.model';
import { ILectureRepo } from './ILecture.repository';

export class LectureRepository implements ILectureRepo<ILecture> {
  async create(item: ILecture): Promise<ILecture> {
    const { title, description, teacher_id, matter } = item;

    const lecture = await prisma.lectures.create({
      data: {
        title,
        description,
        matter,
        teacher_id,
      },
    });

    return lecture;
  }

  async delete(id: string): Promise<ILecture> {
    return {} as ILecture;
  }

  async update(item: ILecture): Promise<ILecture> {
    return {} as ILecture;
  }

  async find(): Promise<ILecture[]> {
    return {} as ILecture[];
  }

  async findOne(id: string): Promise<ILecture> {
    return {} as ILecture;
  }
}
