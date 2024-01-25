import { prisma } from '../../../prisma';
import { SchoolSubject } from '../../database/schemas/subjects.schema';
import { BaseClassRepository } from '../BaseClass.repository';

export class SchoolSubjectRepository extends BaseClassRepository<SchoolSubject> {
    find(offset: number, limit: number): Promise<SchoolSubject[]> {
        throw new Error('Method not implemented.');
    }
    async findManyWithWhere(where: {
        item: string;
    }): Promise<SchoolSubject[] | null> {
        throw new Error('Method not implemented');
    }
    async findOne({
        id,
        item,
    }: {
        id?: string | undefined;
        item?: string | undefined;
    }): Promise<SchoolSubject | null> {
        const subject = await prisma.schoolSubjects.findUnique({
            where: {
                id,
            },
        });

        return subject;
    }
    update(
        id: string,
        { item }: { item?: {} | SchoolSubject | undefined },
    ): Promise<SchoolSubject> {
        throw new Error('Method not implemented.');
    }
    updateMany(): Promise<SchoolSubject[]> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): void {
        throw new Error('Method not implemented.');
    }
    create(item: SchoolSubject): Promise<SchoolSubject> {
        throw new Error('Method not implemented.');
    }
    createMany(item: SchoolSubject[]): void {
        throw new Error('Method not implemented.');
    }
}
