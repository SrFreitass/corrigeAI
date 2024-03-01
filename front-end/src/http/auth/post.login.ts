import { ILogin, ILoginError } from '@/models/auth/login.interface';
import axios, { AxiosError } from 'axios';

import { SetStateAction } from 'react';
import toast from 'react-hot-toast';

export const postLogin = async ({
  email,
  password,
  checkbox,
  setErrorForm,
}: {
  email?: string;
  password?: string;
  checkbox?: boolean;
  setErrorForm: React.Dispatch<SetStateAction<Set<string>>>;
}) => {
  const handleErrors = {
    'Your password does not match': () => {
      toast.error('Ops! Sua senha está incorreta!');
      return 'PASSWORD_INCORRECT';
    },
    'Email is incorrect': () => {
      toast.error('Ops! Seu e-mail está incorreto!');
      return 'EMAIL_INCORRECT';
    },
  };

  try {
    const res = await axios.post<ILogin>(
      'http://localhost:8080/api/v1/auth/login',
      {
        email,
        password,
      },
    );

    setErrorForm(new Set());

    if (checkbox) {
      localStorage.setItem('token', res.data.data.token);
      toast.success('Login efetuado com sucesso!');
      return;
    }

    sessionStorage.setItem('token', res.data.data.token);
    toast.success('Login efetuado com sucesso!');
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorRes = error.response?.data as ILoginError;
      console.log(errorRes);

      const err =
        handleErrors[errorRes.error.issues[0].message] &&
        handleErrors[errorRes.error.issues[0].message]();

      if (!err) {
        toast.error(
          'Um erro inesperando aconteceu, tente novamente mais tarde!',
        );
        return;
      }

      setErrorForm(new Set([err]));
      throw new Error('Unexpected Error');
    }
  }
};
