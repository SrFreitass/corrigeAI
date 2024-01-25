import { prisma } from '../../../prisma';
import { BaseClassRepository } from '../BaseClass.repository';
import { Lesson } from '../../database/schemas/lesson.schema';

export class LessonRepository implements BaseClassRepository<Lesson> {
    async find(): Promise<Lesson[]> {
        const lessons = await prisma.lessons.findMany();

        return lessons;
    }

    async findManyWithWhere(where: { item: string }): Promise<Lesson[]> {
        const lessons = await prisma.lessons.findMany({
            where: {
                lecture_id: where.item,
            },
            include: {
                lecture: true,
            },
        });

        return lessons;
    }

    findOne({
        id,
        item,
    }: {
        id?: string | undefined;
        item?: string | undefined;
    }): Promise<Lesson | null> {
        throw new Error('Method not implemented.');
    }

    async create(item: Lesson): Promise<Lesson> {
        throw new Error('Method not implemented.');
    }

    async createMany(item: Lesson[]): Promise<Lesson[]> {
        await prisma.lessons.createMany({
            data: item,
        });

        return item;
    }

    async update(
        id: string,
        { item }: { item?: {} | Lesson },
    ): Promise<Lesson> {
        const lessonUpdated = await prisma.lessons.update({
            where: {
                id,
            },
            data: {
                ...item,
            },
        });

        return lessonUpdated;
    }

    async updateMany(): Promise<Lesson[]> {
        throw new Error('Method not implemented.');
    }

    async delete(id: string): Promise<Lesson> {
        return {} as Lesson;
    }
}
