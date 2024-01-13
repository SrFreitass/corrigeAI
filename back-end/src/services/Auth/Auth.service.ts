import { genSaltSync, hashSync } from 'bcrypt';
import { AuthRepository } from '../../repositories/Auth/Auth.repository';
import { prisma } from '../../../prisma';
import { ILogin, IRegister } from '../../models/Auth.model';
import { sign, verify } from 'jsonwebtoken';

export class AuthService {
  async register({ email, password, name }: IRegister) {
    if (!name || !email || !password) {
      throw 'Required body is missing';
    }

    const salt = genSaltSync(10);
    const passwordHashing = hashSync(password, salt);
    const authRepository = new AuthRepository();
    const userId = await authRepository.register({
      email,
      password: passwordHashing,
      name,
    });

    const token = sign(
      {
        data: userId,
      },
      `${process.env.SECRET_TOKEN}`,
      { expiresIn: '24h' },
    );

    if (!token) {
      throw 'Error in token generation';
    }

    return { userId, token };
  }

  login({ email, password }: ILogin) {}
}
