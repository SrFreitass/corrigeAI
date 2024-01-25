import { prisma } from '../../../prisma';
import { Lecture } from '../../database/schemas/lecture.schema';
import { BaseClassRepository } from '../BaseClass.repository';

export class LectureRepository extends BaseClassRepository<Lecture> {
    async create(item: Lecture): Promise<Lecture> {
        const lectureCreated = await prisma.lectures.create({
            data: {
                ...item,
            },
        });

        return lectureCreated;
    }

    async updateMany(): Promise<Lecture[]> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<Lecture> {
        const lectureDeleted = await prisma.lectures.delete({
            where: {
                id,
            },
        });

        return lectureDeleted;
    }

    async update(
        id: string,
        { item }: { item?: {} | Lecture | undefined },
    ): Promise<Lecture> {
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

    async createMany(item: Lecture[]): Promise<Lecture[]> {
        throw new Error('Method not implemented');
    }

    async find(offset: number, limit: number): Promise<Lecture[]> {
        const lectures = await prisma.lectures.findMany({
            skip: offset,
            take: limit,
        });

        return lectures;
    }

    async findManyWithWhere(where: { item: string }): Promise<Lecture[]> {
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
    }): Promise<Lecture | null> {
        const lecture = await prisma.lectures.findUnique({
            where: {
                id: id,
            },
        });

        return lecture;
    }
}
