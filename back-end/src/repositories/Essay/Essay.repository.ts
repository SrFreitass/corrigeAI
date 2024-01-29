import { Essays } from '@prisma/client';
import { BaseClassRepository } from '../BaseClass.repository';
import { prisma } from '../../../prisma';

export class EssayRepository extends BaseClassRepository<Essays> {
    find(offset: number, limit: number): Promise<Essays[]> {
        throw new Error('Method not implemented.');
    }

    findManyWithWhere(where: { item: string }): Promise<Essays[] | null> {
        throw new Error('Method not implemented.');
    }
    findOne({
        id,
        item,
    }: {
        id?: string | undefined;
        item?: string | undefined;
    }): Promise<Essays | null> {
        throw new Error('Method not implemented.');
    }
    update(
        id: string,
        {
            item,
        }: {
            item?: {} | Essays | undefined;
        },
    ): Promise<Essays> {
        throw new Error('Method not implemented.');
    }
    updateMany(): Promise<Essays[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): void {
        throw new Error('Method not implemented.');
    }
    async create(item: {
        id: string;
        user_id: string;
        theme: string;
        essay: string;
        points: number;
    }): Promise<Essays> {
        const essay = await prisma.essays.create({
            data: {
                user_id: item.user_id,
                theme: item.theme,
                essay: item.essay,
                points: item.points,
            },
        });

        return essay;
    }
    createMany(
        item: {
            id: string;
            user_id: string;
            createdAt: Date;
            essay: string;
            points: number;
        }[],
    ): void {
        throw new Error('Method not implemented.');
    }
}
