import { IResultEssayUser } from '@/models/essay/resultEssayUser';
import axios from 'axios';

export const postEssay = async ({
  themeId,
  entity,
  essay,
}: {
  themeId: string;
  essay: string;
  entity: string;
}) => {
  const result = await axios.post<IResultEssayUser>(
    'http://localhost:8080/api/v1/essay',
    {
      entity,
      themeId,
      essay,
    },
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return result.data.data;
};
