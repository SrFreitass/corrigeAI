'use client'

import { Button } from '@/ui/utils/button'
import { Input } from '@/ui/utils/input'
import logo from '../../../../public/logo/corrigiAI_logo.svg'
import googleLogo from '../../../../public/logo/google_logo.svg'
import photoRegister from '../../../../public/images/login_photo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const handleErrors = {
  'Your password does not match': () => {
    toast.error('Ops! Sua senha está incorreta!')
  },
  'Email is incorrect': () => {
    toast.error('Ops! Seu e-mail está incorreto!')
  },
}

export default function Login() {
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const [errorForm, setErrorForm] = useState<Set<string>>(new Set())

  console.log(errorForm)

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(emailInputRef)
    console.log(passwordInputRef)

    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    const checkbox = checkboxRef.current?.checked

    if (!email) {
      const error = errorForm.add('EMAIL')
      console.log(error)
      setErrorForm(new Set(error))
    }

    if (errorForm.has('EMAIL') && email) errorForm.delete('EMAIL')

    if (!password || password?.length < 8) {
      const error = errorForm.add('PASSWORD')
      setErrorForm(new Set(error))
    }

    if (errorForm.has('PASSWORD') && password && password.length >= 8) {
      errorForm.delete('PASSWORD')
    }

    if (errorForm.has('PASSWORD') || errorForm.has('EMAIL')) return
    try {
      const res = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      })

      setErrorForm(new Set())

      if (checkbox) {
        localStorage.setItem('token', res.data.data.token)
        toast.success('Login efetuado com sucesso!')
        return
      }

      sessionStorage.setItem('token', res.data.data.token)
      toast.success('Login efetuado com sucesso!')
    } catch (error) {
      handleErrors[error.response.data.error.issues[0].message]()
      setErrorForm(new Set(['EMAIL_INCORRECT']))
    }
  }

  useEffect(() => {
    console.log(errorForm)
  }, [errorForm])

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="flex items-center justify-between h-screen">
        <section className="h-full py-5 flex justify-center w-1/2 bg-blue-5">
          <Image
            className="w-5/6 rounded-3xl object-cover"
            src={photoRegister}
            alt="Estudante feliz com caderno na mão"
            quality={100}
          />
        </section>
        <section className="flex flex-col items-center gap-4 w-1/2">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-5 w-1/2"
          >
            <div>
              <Image
                className="w-24 mb-4"
                src={logo}
                alt="Logo CorrigiAI"
                quality={100}
              />
              <h1 className="text-4xl font-bold text-primary">Entrar</h1>
              <h2 className="text-gray-4">
                Faça login para entrar em sua conta
              </h2>
            </div>
            <Input
              ref={emailInputRef}
              type="email"
              placeholder="E-mail"
              className={`${errorForm.has('EMAIL') && 'border-red-700'}`}
            />
            <p className=" text-red-700 font-medium">
              {errorForm.has('EMAIL') && 'E-mail inválido.'}
              {errorForm.has('EMAIL_INCORRECT') &&
                'Este e-mail não existe na plataforma.'}
            </p>
            <Input
              ref={passwordInputRef}
              type="password"
              placeholder="Senha"
              className={`${errorForm.has('PASSWORD') && 'border-red-700'}`}
            />
            <p className=" text-red-700 font-medium">
              {errorForm.has('PASSWORD') && 'Senha inválida'}
              {errorForm.has('PASSWORD_INCORRECT') && 'Senha incorreta.'}
            </p>
            <div className="flex gap-2">
              <Input ref={checkboxRef} type="checkbox" />
              <p className="font-medium text-primary">Manter conectado</p>
            </div>
            <Button>Entrar</Button>
            <div className="w-full flex items-center gap-4">
              <hr className="w-full border-gray-4" />
              <p>OU</p>
              <hr className="w-full border-gray-4" />
            </div>
            <Button className="!text-primary flex gap-1 justify-center bg-white border">
              Entrar com o Google <Image src={googleLogo} alt="Logo Google" />
            </Button>
            <p className="text-center text-primary font-medium">
              Não tem uma conta? <Link href="/auth/register">Crie uma</Link>
            </p>
          </form>
        </section>
      </main>
    </>
  )
}
