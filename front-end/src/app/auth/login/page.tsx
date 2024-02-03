'use client'

import { Button } from '@/ui/utils/button'
import { Input } from '@/ui/utils/input'
import googleLogo from '../../../../public/logo/google_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React, { FormEvent, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { postLogin } from '@/app/http/post.login'
import { MdEmail } from 'react-icons/md'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { themes } from '@/app/styles/theme'
import { useRouter } from 'next/navigation'

export default function Login() {
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const [errorForm, setErrorForm] = useState<Set<string>>(new Set())
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  console.log(errorForm)

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log(emailInputRef)
    console.log(passwordInputRef)

    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    const checkbox = checkboxRef.current?.checked

    if (!email) {
      setErrorForm((prev) => new Set(prev).add('EMAIL_EMPTY'))
    }

    if (errorForm.has('EMAIL') && email) errorForm.delete('EMAIL_EMPTY')

    if (!password || password?.length < 8) {
      setErrorForm((prev) => new Set(prev).add('PASSWORD_EMPTY'))
    }

    if (errorForm.has('PASSWORD_EMPTY') && password && password.length >= 8) {
      errorForm.delete('PASSWORD_EMPTY')
    }

    if (errorForm.has('PASSWORD') || errorForm.has('EMAIL')) return

    try {
      toast.loading('Carregando...', {
        duration: 1000,
      })
      await postLogin({
        email,
        password,
        checkbox,
        setErrorForm,
      })
      router.push('/dashboard')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="flex items-center justify-between h-[90vh] animate-appear-from-below">
        <section className="flex flex-col items-center gap-4 w-full">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 w-1/4 bg-white py-20 px-10 rounded-xl drop-shadow-xl"
          >
            <div>
              <h1 className="text-2xl font-bold text-primary text-center mb-2">
                Acesse sua conta CorrigiAI
              </h1>
              <h2 className="text-gray-4 text-center">
                Faça login para entrar em sua conta
              </h2>
            </div>

            <Button className="!text-primary flex gap-1 justify-center bg-white border">
              Entrar com o Google <Image src={googleLogo} alt="Logo Google" />
            </Button>

            <div className="w-full flex items-center gap-4">
              <hr className="w-full border-gray-4" />
              <p className="font-semibold">OU</p>
              <hr className="w-full border-gray-4" />
            </div>

            <div className="flex flex-row-reverse items-center">
              <span className="absolute p-4">
                {<MdEmail size={24} color={themes.colors.primary} />}
              </span>
              <Input
                ref={emailInputRef}
                type="email"
                placeholder="E-mail"
                className={`${errorForm.has('EMAIL') && 'border-red-700'} pr-12 w-full`}
              />
            </div>
            <p className=" text-red-700 font-medium">
              {errorForm.has('EMAIL') && 'E-mail inválido.'}
              {errorForm.has('EMAIL_INCORRECT') &&
                'Este e-mail não existe na plataforma.'}
            </p>

            <div className="flex flex-row-reverse items-center">
              <span className="absolute p-4" onClick={handlePassword}>
                {showPassword ? (
                  <FaEye size={24} color={themes.colors.primary} />
                ) : (
                  <FaEyeSlash size={25} color={themes.colors.primary} />
                )}
              </span>
              <Input
                ref={passwordInputRef}
                type={`${showPassword ? 'text' : 'password'}`}
                placeholder="Senha"
                className={`${errorForm.has('PASSWORD') && 'border-red-700'} pr-12 w-full`}
              />
            </div>
            <p className=" text-red-700 font-medium">
              {errorForm.has('PASSWORD') && 'Senha inválida'}
              {errorForm.has('PASSWORD_INCORRECT') && 'Senha incorreta.'}
            </p>

            <div className="flex gap-2">
              <Input ref={checkboxRef} type="checkbox" className="w-4" />
              <p className="font-medium text-primary">Manter conectado</p>
            </div>

            <Button>Entrar</Button>

            <p className="text-center text-primary font-medium">
              Não tem uma conta?{' '}
              <Link href="/auth/register">
                <u>Crie uma</u>
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  )
}
