import { IAuthRepo } from './IAuthRepo';
import { ILogin, IRegister } from '../../models/Auth.model';
import { prisma } from '../../../prisma';

export class AuthRepository implements IAuthRepo<IRegister, ILogin> {
  async login({ email, password }: ILogin): Promise<string> {
    return '';
  }

  async register({ name, email, password }: IRegister): Promise<string> {
    const user = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return user.id;
  }
}
