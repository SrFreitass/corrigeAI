export interface IAuthRepo<R, L> {
  register({}: R): Promise<string>;

  login({}: L): Promise<string>;
}
