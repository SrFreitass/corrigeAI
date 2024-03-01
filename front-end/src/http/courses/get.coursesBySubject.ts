import { ICourse } from '@/models/course/course.interface';
import axios from 'axios';

export const getCoursesBySubject = async ({
  typeSubject,
  subjectId,
}: {
  typeSubject: string;
  subjectId: string;
}) => {
  const courses = await axios.get<ICourse>(
    `http://localhost:8080/api/v1/courses/subjects/${typeSubject.toUpperCase()}/${subjectId}`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return courses.data;
};
