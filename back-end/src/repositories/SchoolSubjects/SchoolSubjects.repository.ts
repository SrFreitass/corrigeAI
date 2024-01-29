import { prisma } from '../../../prisma';
import { SchoolSubjects } from '@prisma/client';
import { BaseClassRepository } from '../BaseClass.repository';

export class SchoolSubjectRepository extends BaseClassRepository<SchoolSubjects> {
    find(offset: number, limit: number): Promise<SchoolSubjects[]> {
        throw new Error('Method not implemented.');
    }
    async findManyWithWhere(where: {
        item: string;
    }): Promise<SchoolSubjects[] | null> {
        throw new Error('Method not implemented');
    }
    async findOne({
        id,
        item,
    }: {
        id?: string | undefined;
        item?: string | undefined;
    }): Promise<SchoolSubjects | null> {
        const subject = await prisma.schoolSubjects.findUnique({
            where: {
                id,
            },
        });

        return subject;
    }
    update(
        id: string,
        { item }: { item?: {} | SchoolSubjects | undefined },
    ): Promise<SchoolSubjects> {
        throw new Error('Method not implemented.');
    }
    updateMany(): Promise<SchoolSubjects[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): void {
        throw new Error('Method not implemented.');
    }
    create(item: SchoolSubjects): Promise<SchoolSubjects> {
        throw new Error('Method not implemented.');
    }
    createMany(item: SchoolSubjects[]): void {
        throw new Error('Method not implemented.');
    }
}
