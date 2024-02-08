import { IRankingUsers } from '@/models/user.interface';
import axios from 'axios';

export const getRankingUsers = async (page: number) => {
  try {
    const response = await axios<IRankingUsers>(
      `http://localhost:8080/api/v1/users/ranking/${page}`,
      {
        headers: {
          'x-access-token':
            (localStorage.getItem('token') && localStorage.getItem('token')) ||
            sessionStorage.getItem('token'),
        },
      },
    );

    return response.data;
  } catch (err) {
    console.log(err);

    throw new Error('Unexpected Error');
  }
};
