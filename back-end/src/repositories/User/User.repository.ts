import { User } from '../../database/schemas/user.schema';
import { prisma } from '../../../prisma';
import { BaseClassRepository } from '../BaseClass.repository';

export class UserRepository extends BaseClassRepository<User> {
    async create(item: User) {
        const userCreated = await prisma.users.create({
            data: {
                ...item,
            },
        });

        return userCreated;
    }

    async createMany(item: User[]) {
        throw new Error('Method not implemented.');
    }

    async update(id: string, { item }: { item?: User }): Promise<User> {
        const userUpdated = await prisma.users.update({
            where: {
                id,
            },
            data: {
                ...item,
            },
        });

        return userUpdated;
    }

    async updateMany(): Promise<User[]> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string) {
        throw 'Method not implemented';
    }

    async find() {
        const userFind = await prisma.users.findMany();
        return userFind;
    }

    async findManyWithWhere(where: { item: string }): Promise<User[]> {
        throw new Error('Method not implemented.');
    }

    async findOne({
        id,
        item,
    }: {
        id?: string;
        item?: string;
    }): Promise<User | null> {
        console.log(id, item);
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
        });

        return user;
    }
}
