import { IResultEssayUser } from '@/models/essay/resultEssayUser';
import axios from 'axios';

export const getEssayUser = async (id: string) => {
  const essay = await axios.get<IResultEssayUser>(
    `http://localhost:8080/api/v1/essay/result/${id}`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return essay.data.data;
};
