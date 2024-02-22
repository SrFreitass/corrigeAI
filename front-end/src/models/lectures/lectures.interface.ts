export interface ILecture {
  statusCode: number;
  message: string;
  data: [
    {
      id: string;
      title: string;
      description: string;
      video_url: string;
      teacher_id: string;
      course_id: string;
      createdAt: Date;
      updateAt: Date | null;
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
    },
  ];
}
