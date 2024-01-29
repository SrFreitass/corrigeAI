import { readFile, readFileSync } from 'fs';
import { Transporter, createTransport } from 'nodemailer';
import { Users } from '@prisma/client';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { z } from 'zod';

export class VerifyEmailUseCase {
    constructor(private readonly userRepository: BaseClassRepository<Users>) {}

    async execute(userId: string) {
        z.string().uuid({ message: 'Invalid user' });
        const user = await this.userRepository.findOne({ id: userId });

        if (user?.email_verified) throw 'User is not valid';

        const userVerfied = await this.userRepository.update(userId, {
            item: { email_verified: true },
        });

        return {
            id: userVerfied.id,
            email: userVerfied.email,
            name: userVerfied.name,
            email_verified: userVerfied.email_verified,
        };
    }
}
