import { Users } from '@prisma/client'
import { prisma } from '../../../prisma'
import { BaseClassRepository } from '../BaseClass.repository'

export class UserRepository extends BaseClassRepository<Users> {
  async create(item: Users) {
    const userCreated = await prisma.users.create({
      data: {
        ...item,
      },
    })

    return userCreated
  }

  async createMany(item: Users[]) {
    throw new Error('Method not implemented.')
  }

  async update(id: string, { item }: { item?: Users }): Promise<Users> {
    const userUpdated = await prisma.users.update({
      where: {
        id,
      },
      data: {
        ...item,
      },
    })

    return userUpdated
  }

  async updateMany(): Promise<Users[]> {
    throw new Error('Method not implemented.')
  }

  async delete(id: string) {
    throw new Error('Method not implemented')
  }

  async find() {
    const userFind = await prisma.users.findMany()
    return userFind
  }

  async findManyWithWhere(where: { item: string }): Promise<Users[]> {
    throw new Error('Method not implemented.')
  }

  async findOne({
    id,
    item,
  }: {
    id?: string
    item?: string
  }): Promise<Users | null> {
    console.log(id, item)
    const user = await prisma.users.findFirst({
      where: {
        OR: [
          {
            email: { equals: item },
          },
          {
            id: { equals: id },
          },
        ],
      },
    })

    return user
  }

  async findWithOrderBy(
    orderBy: { points: 'asc' | 'desc' },
    offset: number,
    limit: number,
  ): Promise<Users[]> {
    const usersOrderByPoints = await prisma.users.findMany({
      orderBy: {
        ...orderBy,
      },
    })

    return usersOrderByPoints
  }
}
