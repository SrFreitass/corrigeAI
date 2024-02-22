export interface ILogin {
  statusCode: number;
  message: string;
  data: {
    name: string;
    email: string;
    token: string;
    createdAt: Date;
  };
}

export interface ILoginError {
  statusCode: number;
  error: {
    issues: [
      { message: 'Your password does not match' | 'Email is incorrect' },
    ];
  };
  data: [];
}
