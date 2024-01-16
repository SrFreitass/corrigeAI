import { IAuthRepo } from './IAuthRepo';
import { ILogin, IRegister } from '../../models/Auth.model';
import { IUser } from '../../models/User.model';
import { prisma } from '../../../prisma';

export class AuthRepository implements IAuthRepo<IRegister, ILogin, IUser> {
  async findOneById({ userId }: { userId: string }): Promise<IUser | null> {
    const user = await prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    return user;
  }

  async findOneByEmail({ email }: ILogin): Promise<IUser> {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async create({ name, email, password }: IRegister): Promise<string> {
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
