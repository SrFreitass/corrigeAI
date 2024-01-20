/**
 * @schema Lesson
 */
export interface Lesson {
    id: string;
    title: string;
    description: string;
    lecture_id: string;
    image_url: string | null;
    options: string[];
    createdAt: Date;
    answer: number;
    answer_text: string | null;
    answer_img_url: string | null;
}
