import axios from 'axios';

export const postAnswerQuiz = async ({
  answers,
  lectureId,
}: {
  lectureId: string;
  answers: number[];
}) => {
  const results = await axios.post(
    'http://localhost:8080/api/v1/lessons/response',
    {
      lectureId,
      answers,
    },
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return results.data;
};
