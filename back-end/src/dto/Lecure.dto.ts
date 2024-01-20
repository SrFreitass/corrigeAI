import { Lesson } from '../database/schemas/lesson.schema';

export interface LectureInputDTO {
    title: string;
    description: string;
    teacher_id: string;
    enemSubject_id: string;
    schoolSubject_id: string;
    image_url?: string;
}

export interface LectureOutputDTO {
    id: string;
    title: string;
    description: string;
    enemSubject_id: string;
    schoolSubject_id: string;
    lessons?: Lesson[];
    image_url?: string;
    createdAt: Date;
    updateAt: Date | null;
}
