export interface ILesson {
  id: string;
  title: string;
  description: string;
  matter: string;
  lecture_id: string;
  image_url: string | null;
  options: string[];
  createdAt: Date;
}
