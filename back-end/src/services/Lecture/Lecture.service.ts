import { z } from 'zod';
import { ILecture } from '../../models/Lecure.model';
import { LectureRepository } from '../../repositories/Lecture/Lecture.repository';

export class LectureService {
  async create({ title, description, matter, teacher_id }: ILecture) {
    const schema = z.object({
      title: z.string().min(6),
      description: z.string().min(6),
      matter: z.string().min(6),
      teacher_id: z.string().min(6),
    });

    schema.parse({ title, description, matter, teacher_id });

    const lectureRepo = new LectureRepository();
    const lecture = lectureRepo.create({
      title,
      description,
      matter,
      teacher_id,
    });

    return lecture;
  }
}
