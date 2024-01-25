import { z } from 'zod';
import { LoginInputDTO, LoginOutputDTO } from '../../dto/Auth.dto';
import { User } from '../../database/schemas/user.schema';
import { compareSync } from 'bcrypt';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { sign } from 'jsonwebtoken';

export class LoginUserUseCase {
    constructor(private readonly userRepository: BaseClassRepository<User>) {}

    async execute({ email, password }: LoginInputDTO): Promise<LoginOutputDTO> {
        const userSchema = z
            .object({
                email: z.string().email(),
                password: z.string().min(8),
            })
            .strict();

        userSchema.parse({ email, password });

        const user = await this.userRepository.findOne({ item: email });

        z.string({ errorMap: () => ({ message: 'Email is incorrect' }) }).parse(
            user?.email,
        );

        const passwordMatch = compareSync(`${password}`, `${user?.password}`);

        z.literal(true, {
            errorMap: () => ({ message: 'Your password does not match' }),
        }).parse(passwordMatch);

        const token = sign(
            {
                userId: user?.id,
                email: user?.email,
            },
            `${process.env.SECRET_TOKEN}`,
            { expiresIn: '1Y' },
        );

        if (!token) throw 'Token was not generated';

        return { token };
    }
}
