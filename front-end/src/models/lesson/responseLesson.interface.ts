export interface IResponseLesson {
  answers: [
    {
      correct: boolean;
      lecture_id: string;
      lesson_id: string;
      option: number;
      user_id: string;
    },
  ];
}
