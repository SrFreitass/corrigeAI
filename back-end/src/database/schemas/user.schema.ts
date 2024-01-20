/**
 * @schema User
 */
export interface User {
    id: string;
    name: string;
    email: string;
    email_verified: boolean;
    password: string;
    role: string;
    createdAt: Date;
}
