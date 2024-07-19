import { Users } from "@prisma/client";
import { z } from "zod";
import { BaseClassRepository } from "../../repositories/BaseClass.repository";

export class VerifyEmailUseCase {
  constructor(private readonly userRepository: BaseClassRepository<Users>) {}

  async execute(userId: string) {
    z.string().uuid({ message: "Invalid user" });
    const user = await this.userRepository.findOne({ id: userId });

    if (user?.email_verified) throw new Error("User is not valid");

    const userVerfied = await this.userRepository.update(userId, {
      item: { email_verified: true } as Users,
    });

    return {
      id: userVerfied.id,
      email: userVerfied.email,
      name: userVerfied.name,
      email_verified: userVerfied.email_verified,
    };
  }
}
