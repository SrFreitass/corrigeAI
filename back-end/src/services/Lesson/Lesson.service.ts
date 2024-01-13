import { PrismaClient } from '@prisma/client';
import { ILesson } from '../../models/Lesson.model';
import { LessonRepository } from '../../repositories/Lesson/Lesson.repository';
import { prisma } from '../../../prisma';

export class LessonService {
  async createLesson({
    title,
    description,
    options,
    image_url,
    matter,
    lecture_id,
  }: ILesson): Promise<ILesson> {
    if (!title || !description || !options || !matter || !lecture_id) {
      throw new Error('Required body is missing');
    }

    return {} as ILesson;
  }

  async updateLesson(): Promise<ILesson> {
    return {} as ILesson;
  }

  async deleteLesson(): Promise<ILesson> {
    return {} as ILesson;
  }

  async getAllLessons(): Promise<ILesson[]> {
    return [{} as ILesson];
  }

  async getLesson(): Promise<ILesson> {
    return {} as ILesson;
  }
}
