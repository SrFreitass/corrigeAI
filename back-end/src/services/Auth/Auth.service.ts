import { compare, compareSync, genSaltSync, hashSync } from 'bcrypt';
import { ILogin, IRegister } from '../../models/Auth.model';
import { sign, verify } from 'jsonwebtoken';
import { IAuthRepo } from '../../repositories/Auth/IAuthRepo';
import { AuthRepository } from '../../repositories/Auth/Auth.repository';
import { EmailService } from '../Email/Email.service';
import { ZodOptional, z } from 'zod';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}
  async register({ email, password, name }: IRegister) {
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(8),
      name: z.string().min(6),
    });

    schema.parse({ email, password, name });

    const salt = genSaltSync(10);
    const passwordHashing = hashSync(password, salt);
    const userId = await this.authRepository.create({
      email,
      password: passwordHashing,
      name,
    });

    const token = sign({ data: userId }, `${process.env.SECRET_TOKEN}`, {
      expiresIn: '24h',
    });

    if (!token) throw 'Token was not generated';

    const emailService = new EmailService();
    const emailRecievied = await emailService.sendEmail({ email, name });

    return { userId, token, emailRecievied };
  }

  async login({ email, password }: ILogin) {
    const schema = z.object({
      email: z.string().email().regex(emailRegex),
      password: z.string().min(8),
    });

    schema.parse({ email, password });

    const user = await this.authRepository.findOneByEmail({ email });

    z.object(
      { email: z.string(), password: z.string() },
      {
        errorMap: () => ({
          message: 'E-mail or Password is incorrect',
        }),
      },
    ).parse(user);

    const passwordMatch = compareSync(`${password}`, `${user?.password}`);

    z.literal(true, {
      errorMap: () => ({ message: 'Password does not match' }),
    }).parse(passwordMatch);

    const token = sign(
      {
        userId: user?.id,
        email: user?.email,
      },
      `${process.env.SECRET_TOKEN}`,
      { expiresIn: '24h' },
    );

    if (!token) throw 'Token was not generated';

    return { userId: user?.id, token };
  }
}
