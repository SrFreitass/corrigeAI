import { Lesson } from './lesson.schema';

/**
 * @schema Lecture
 */
export interface Lecture {
    id: string;
    title: string;
    description: string;
    schoolSubject_id: string;
    enemSubject_id: string;
    teacher_id: string;
    lessons?: Lesson[];
    createdAt: Date;
    updateAt: Date | null;
}
