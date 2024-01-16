import { ILesson } from '../../models/Lesson.model';
import { prisma } from '../../../prisma';
import { ILessonRepo } from './ILessonRepo';

export class LessonRepository implements ILessonRepo<ILesson> {
  async find(lecture_id: string): Promise<ILesson[]> {
    const lessons = await prisma.lessons.findMany({
      where: {
        lecture_id,
      },
    });

    return lessons;
  }

  async findOne(id: string): Promise<ILesson> {
    return {} as ILesson;
  }

  async create(item: ILesson): Promise<ILesson> {
    const lesson = await prisma.lessons.create({
      data: {
        title: item.title,
        description: item.description,
        options: item.options,
        image_url: item.image_url,
        matter: item.matter,
        lecture_id: item.lecture_id,
      },
    });

    return lesson;
  }

  async update(item: ILesson): Promise<ILesson> {
    return {} as ILesson;
  }

  async delete(id: string): Promise<ILesson> {
    return {} as ILesson;
  }
}
