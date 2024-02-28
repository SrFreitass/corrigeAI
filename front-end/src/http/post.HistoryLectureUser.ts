import axios from 'axios';

// Arrumar isso!!
export const postHistoryLectureUser = async (lectureId: string) => {
  const history = await axios.post(
    `http://localhost:8080/api/v1/user/course/${lectureId}/history`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return history.data;
};
