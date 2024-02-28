import { ILecture } from '@/models/lectures/lectures.interface';
import axios from 'axios';

export const getLecturesByCourse = async (courseId: string) => {
  const lecturesByCouse = await axios.get<ILecture>(
    `http://localhost:8080/api/v1/lectures/${courseId}`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  console.log(lecturesByCouse.data);
  return lecturesByCouse.data;
};
