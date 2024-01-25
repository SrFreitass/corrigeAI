import { Lecture } from './lecture.schema';

export interface Answer {
    id?: string;
    user_id: string;
    lesson_id: string;
    lecture_id: string;
    option: number;
    correct: boolean;
}
