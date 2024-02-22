export abstract class BaseClassRepository<T> {
  abstract find(offset: number, limit: number): Promise<T[]>;

  abstract findManyWithWhere(where: { item: string }): Promise<T[] | null>;

  abstract findOne({
    id,
    item,
  }: {
    id?: string;
    item?: string;
  }): Promise<T | null>;

  abstract update(
    id: string,
    {
      item,
    }: {
      item?: T;
    },
  ): Promise<T>;

  abstract findWithOrderBy(
    orderBy: {
      [key: string]: "asc" | "desc";
    } | null,
    offset: number,
    limit: number,
  ): Promise<T[]>;

  abstract updateMany(): Promise<T[]>;

  abstract delete(id: string): void;

  abstract create(item: T): Promise<T>;

  abstract createMany(item: T[]): void;
}
