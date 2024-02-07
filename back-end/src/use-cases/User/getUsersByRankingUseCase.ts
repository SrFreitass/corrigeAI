import { Users } from '@prisma/client'
import { BaseClassRepository } from '../../repositories/BaseClass.repository'
import { UserRepository } from '../../repositories/User/User.repository'
import { z } from 'zod'

export class GetUsersByRankingUseCase {
  constructor(private readonly userRepository: BaseClassRepository<Users>) {}

  async execute(page: number) {
    z.number().parse(page)

    return await this.userRepository.findWithOrderBy(
      { points: 'desc' },
      page * 10 - 10,
      page * 10,
    )
  }
}
