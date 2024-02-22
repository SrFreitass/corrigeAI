import { ICourse } from '@/models/course/course.interface';
import axios from 'axios';

export const getCourses = async (page = 1) => {
  const data = await axios.get<ICourse>(
    `http://localhost:8080/api/v1/courses/${page}`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );
  return data.data;
};
