import { IRankingUsers } from '@/models/user.interface';
import axios from 'axios';

export const getRankingUsers = async (page: number) => {
  try {
    const response = await axios<IRankingUsers>(
      `localhost:8080/api/v1/users/ranking/${page}`,
    );
    return response.data;
  } catch {
    throw new Error('Unexpected Error');
  }
};
