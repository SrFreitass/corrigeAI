export interface IAuthRepo<R, L, K> {
  create({}: R): Promise<string>;

  findOneByEmail({}: L): Promise<K>;

  findOneById({ userId }: { userId: string }): Promise<K | null>;
}
