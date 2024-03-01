import { ITheme } from '@/models/themes/themes.interface';
import axios from 'axios';

export const getThemes = async (page: number) => {
  const themes = await axios.get<ITheme>(
    `http://localhost:8080/api/v1/essays/${page}`,
    {
      headers: {
        'x-access-token':
          localStorage.getItem('token') || sessionStorage.getItem('token'),
      },
    },
  );

  return themes.data.data;
};
