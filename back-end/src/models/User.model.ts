export type IUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  verifiedEmail?: string;
  createdAt: Date;
} | null;
