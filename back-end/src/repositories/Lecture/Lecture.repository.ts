import { prisma } from '../../../prisma';
import { Lectures } from '@prisma/client';
import { BaseClassRepository } from '../BaseClass.repository';

export class LectureRepository extends BaseClassRepository<Lectures> {
    async create(item: Lectures): Promise<Lectures> {
        const lectureCreated = await prisma.lectures.create({
            data: {
                ...item,
            },
        });

        return lectureCreated;
    }

    async updateMany(): Promise<Lectures[]> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<Lectures> {
        const lectureDeleted = await prisma.lectures.delete({
            where: {
                id,
            },
        });

        return lectureDeleted;
    }

    async update(
        id: string,
        { item }: { item?: {} | Lectures | undefined },
    ): Promise<Lectures> {
        const lectureUpdated = await prisma.lectures.update({
            where: {
                id,
            },
            data: {
                ...item,
            },
        });

        return lectureUpdated;
    }

    async createMany(item: Lectures[]): Promise<Lectures[]> {
        throw new Error('Method not implemented');
    }

    async find(offset: number, limit: number): Promise<Lectures[]> {
        const lectures = await prisma.lectures.findMany({
            skip: offset,
            take: limit,
        });

        return lectures;
    }

    async findManyWithWhere(where: { item: string }): Promise<Lectures[]> {
        const lectures = await prisma.lectures.findMany({
            where: {
                OR: [
                    {
                        enemSubject_id: where.item,
                    },
                    {
                        schoolSubject_id: where.item,
                    },
                ],
            },
        });

        return lectures;
    }

    async findOne({
        id,
        item,
    }: {
        id?: string;
        item?: string;
    }): Promise<Lectures | null> {
        const lecture = await prisma.lectures.findUnique({
            where: {
                id: id,
            },
        });

        return lecture;
    }
}
