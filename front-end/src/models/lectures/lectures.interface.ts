import { http } from '../http/http.interface';

export interface ILectureData {
  id: string;
  title: string;
  description: string;
  video_url: string;
  teacher_id: string;
  course_id: string;
  createdAt: Date;
  updateAt: Date | null;
  Answers: {
    correct: boolean;
    createdAt: string;
    id: string;
    lecture_id: string;
    lesson_id: string;
    option: number;
    user_id: string;
  }[];
  UsersLectureHistory: [
    {
      id: string;
      user_id: string;
      lecture_id: string;
      course_id: string;
    },
  ];
  Teacher: {
    name: string;
  };
  Lessons: [
    {
      id: string;
      title: string;
      description: string;
      lecture_id: string;
      image_url: null;
      options: string[];
      createdAt: string;
      answer: number;
      answer_img_url: null;
      answer_text: null;
    },
  ];
}

export type ILecture = http<ILectureData>;
