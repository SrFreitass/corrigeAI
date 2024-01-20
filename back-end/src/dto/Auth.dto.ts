export interface RegisterInputDTO {
    name: string;
    email: string;
    password: string;
}

export interface RegisterOutputDTO {
    name: string;
    email: string;
    token: string;
    createdAt: Date;
}

export interface LoginInputDTO {
    email: string;
    password: string;
}

export interface LoginOutputDTO {
    token: string;
}
