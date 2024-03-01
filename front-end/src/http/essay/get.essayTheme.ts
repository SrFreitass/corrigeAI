import { ITheme } from '@/models/themes/themes.interface';
import axios from 'axios';

export const getEssayTheme = async ({
  entity,
  essayThemeId,
}: {
  entity: string;
  essayThemeId: string;
}) => {
  const essayTheme = await axios.get<ITheme>(
    `http://localhost:8080/api/v1/essay/${entity}/${essayThemeId}`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return essayTheme.data.data;
};
