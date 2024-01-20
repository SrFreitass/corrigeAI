import { readFile, readFileSync } from 'fs';
import { Transporter, createTransport } from 'nodemailer';
import { User } from '../../database/schemas/user.schema';
import { BaseClassRepository } from '../../repositories/BaseClass.repository';
import { z } from 'zod';

export class VerifyEmailUseCase {
    constructor(private readonly userRepository: BaseClassRepository<User>) {}

    async execute(userId: string) {
        const user = await this.userRepository.findOne({ id: userId });

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
