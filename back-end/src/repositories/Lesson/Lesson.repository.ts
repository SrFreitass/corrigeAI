import { ILesson } from '../../models/Lesson.model';
import { prisma } from '../../../prisma';
import { ILessonRepo } from './ILessonRepo';

export class LessonRepository implements ILessonRepo<ILesson> {
  async find(): Promise<ILesson[]> {
    return [{} as ILesson];
  }

  async findOne(id: string): Promise<ILesson> {
    return {} as ILesson;
  }

  async create(item: ILesson): Promise<ILesson> {
    return {} as ILesson;
  }

  async update(item: ILesson): Promise<ILesson> {
    return {} as ILesson;
  }

  async delete(id: string): Promise<ILesson> {
    return {} as ILesson;
  }
}
