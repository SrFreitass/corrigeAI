import { Lessons } from "@prisma/client";

export interface LectureInputDTO {
  title: string;
  description: string;
  teacher_id: string;
  course_id: string;
  image_url?: string;
}

export interface LectureOutputDTO {
  id: string;
  title: string;
  description: string;
  course_id: string;
  lessons?: Lessons[];
  image_url?: string;
  createdAt: Date;
  updateAt: Date | null;
}
