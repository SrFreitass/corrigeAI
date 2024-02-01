import { z } from 'zod';
import { Lessons } from '@prisma/client';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';

export class GetLessonsByLectureIdUseCase {
  constructor(private lessonRepository: BaseClassRepository<Lessons>) {}

  async execute(lectureId: string): Promise<Lessons[] | null> {
    z.string().uuid().parse(lectureId);

    const lessons = await this.lessonRepository.findManyWithWhere({
      item: lectureId,
    });

    return lessons;
  }
}
