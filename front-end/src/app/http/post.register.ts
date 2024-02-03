import { IRegister, IRegisterError } from '@/models/auth/register.interface'
import axios, { AxiosError } from 'axios'
import { SetStateAction } from 'react'
import toast from 'react-hot-toast'

export const postRegister = async ({
  name,
  email,
  password,
  checkbox,
  setErrorForm,
}: {
  name?: string
  email?: string
  password?: string
  checkbox?: boolean
  setErrorForm: React.Dispatch<SetStateAction<Set<string>>>
}) => {
  try {
    const res = await axios.post<IRegister>(
      'http://localhost:8080/api/v1/auth/register',
      {
        email,
        password,
        name,
      },
    )

    toast.success('Cadastro efetuado com sucesso!')
    sessionStorage.setItem('token', res.data.data.token)

    setErrorForm(new Set())
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorRes = error.response?.data as IRegisterError

      if (errorRes.error.issues[0].message === 'E-mail already exists') {
        setErrorForm(new Set(['EMAIL_ALREDY_EXISTS']))
        toast.error('E-mail já cadastrado!')
        return
      }

      throw new Error('Unexpected Error')
    }
  }
}
