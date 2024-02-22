export interface LessonInputDTO {
  title: string;
  description: string;
  image_url: string | null;
  lecture_id: string;
  options: string[];
  answer: number;
  answer_text: string | null;
  answer_img_url: string | null;
}

export interface LessonOutputDTO {
  title: string;
  description: string;
  lecture_id: string;
  image_url: string | null;
  options: string[];
  answer: number;
  answer_text: string | null;
  answer_img_url: string | null;
}
