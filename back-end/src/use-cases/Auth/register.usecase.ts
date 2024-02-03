import { z } from 'zod';
import { RegisterInputDTO, RegisterOutputDTO } from '../../dto/Auth.dto';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { sign } from 'jsonwebtoken';
import { genSaltSync, hashSync } from 'bcrypt';
import { readFileSync } from 'fs';
import { Users } from '@prisma/client';
import { SendEmailUseCase } from '../Email/sendEmail.usecase';

export class RegisterUserUseCase {
  constructor(private readonly userRepository: BaseClassRepository<Users>) {}

  regexPassowrd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

  async execute({
    email,
    password,
    name,
  }: RegisterInputDTO): Promise<RegisterOutputDTO | { error: string }> {
    const userSchema = z.object({
      email: z.string().email(),
      password: z.string().min(8).regex(this.regexPassowrd),
      name: z.string().min(6),
    });

    userSchema.parse({ email, password, name });

    const emailExists = await this.userRepository.findOne({ item: email });
    z.literal(undefined, {
      errorMap: () => ({ message: 'E-mail already exists' }),
    }).parse(emailExists?.email);

    const salt = genSaltSync(10);
    const passwordHashing = hashSync(password, salt);

    const user = {
      name,
      email,
      password: passwordHashing,
    } as Users;

    const userCreated = await this.userRepository.create(user);

    const token = sign(
      { data: { userId: userCreated.id, email: user.email } },
      `${process.env.SECRET_TOKEN}`,
      {
        expiresIn: '1Y',
      },
    );

    if (!token) throw new Error('Token was not generated');

    try {
      const emailTemplate = readFileSync('./src/templates/AuthEmail/index.html')
        .toString()
        .replace('[name]', user.name)
        .replace(
          '[link]',
          `<a href="http://localhost:8080/api/v1/email/verify/${userCreated.id}" style="text-decoration: none; color: #fff">Clique aqui para verificar seu e-mail</a>`,
        );

      const sendEmailUseCase = new SendEmailUseCase();

      await sendEmailUseCase.execute({
        from: `CorrigiAI - Auth <${process.env.CLIENT_EMAIL}>`,
        subject: 'Verficação do seu e-mail',
        to: user.email,
        html: `${emailTemplate}`,
      });
    } catch (error) {
      console.error(error);
      return {
        error:
          'Unexpected error: account created, but email verification not sent.',
      };
    }

    return {
      email: user.email,
      name: user.name,
      token,
      createdAt: user.createdAt,
    };
  }
}
