'use client'

import { Button } from '@/ui/utils/button'
import { Input } from '@/ui/utils/input'
import googleLogo from '../../../../public/logo/google_logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useRef, useState } from 'react'
import { postRegister } from '@/app/http/post.register'
import { useRouter } from 'next/navigation'
import toast, { Toaster } from 'react-hot-toast'
import { ParagraphError } from '@/ui/utils/paragraphError'

import { themes } from '@/app/styles/theme'
import { MdAccountCircle, MdEmail } from 'react-icons/md'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { exec } from 'child_process'

export default function Register() {
  const nameInputRef = useRef<HTMLInputElement | null>(null)
  const emailInputRef = useRef<HTMLInputElement | null>(null)
  const passwordInputRef = useRef<HTMLInputElement | null>(null)
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const [errorForm, setErrorForm] = useState<Set<string>>(new Set([]))
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  console.log(errorForm)

  const handlePassword = () => {
    setShowPassword(!showPassword)
  }

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    let errors = 0
    const name = nameInputRef.current?.value
    const email = emailInputRef.current?.value
    const password = passwordInputRef.current?.value
    const checkbox = checkboxRef.current?.checked
    console.log(name, email, password, checkbox)

    if (!name) {
      setErrorForm((prev) => new Set(prev).add('NAME_EMPTY'))
      errors++
    }

    if (name && name?.length < 6) {
      errorForm.add('NAME_SHORT')
      errors++
    }

    if (name && name?.length >= 6) errorForm.delete('NAME_SHORT')

    if (name) errorForm.delete('NAME_EMPTY')

    if (!email) {
      setErrorForm((prev) => new Set(prev).add('EMAIL_EMPTY'))
      errors++
    }

    if (email) {
      errorForm.delete('EMAIL_EMPTY')

      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g

      if (regex.exec(password as string) === null) {
        setErrorForm((prev) => new Set(prev).add('PASSWORD_LOW_SECURITY'))
        errors++
      }

      console.log(regex.exec(password as string), 'as')

      if (regex.exec(password as string) !== null) {
        console.log('entrou aqui')
        errorForm.delete('PASSWORD_LOW_SECURITY')
      }

      if (errors > 0) return

      try {
        toast.loading('Carregando...', {
          duration: 1000,
        })

        await postRegister({ name, email, password, setErrorForm })
        router.push('./verify/email')
      } catch (error) {
        console.error(error)
      }
    }
  }

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="flex items-center justify-between h-[90vh] animate-appear-from-below">
        <section className="flex flex-col items-center gap-4 w-full">
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col gap-4 w-1/4 bg-white dark:bg-dark py-20 px-10 rounded-xl drop-shadow-xl"
          >
            <div>
              <h1 className="text-2xl font-bold text-primary dark:text-white text-center">
                Crie uma conta no CorrigiAI
              </h1>
              <h2 className="text-gray-4 text-center">
                CorrigiAI sua plataforma preparatória para o ENEM
              </h2>
            </div>
            <Button className="!text-primary flex gap-1 justify-center bg-white border">
              Entrar com o Google <Image src={googleLogo} alt="Logo Google" />
            </Button>
            <div className="w-full flex items-center gap-4">
              <hr className="w-full border-gray-4" />
              <p className="font-semibold dark:text-white">OU</p>
              <hr className="w-full border-gray-4" />
            </div>
            <div className="flex flex-row-reverse items-center">
              <span className="absolute p-4">
                {
                  <MdAccountCircle
                    size={24}
                    color={
                      document.documentElement.classList.contains('dark')
                        ? '#ffffff'
                        : themes.colors.primary
                    }
                  />
                }
              </span>
              <Input
                ref={nameInputRef}
                type="text"
                placeholder="Nome"
                className={`
                w-full pr-12
              ${
                (errorForm.has('NAME_EMPTY') && 'border-red-700') ||
                (errorForm.has('NAME_SHORT') && 'border-red-700')
              }`}
              />
            </div>
            {(errorForm.has('NAME_EMPTY') && (
              <ParagraphError>Nome não pode ser vazio</ParagraphError>
            )) ||
              (errorForm.has('NAME_SHORT') && (
                <ParagraphError>Minímo 6 caracteres</ParagraphError>
              ))}
            <div className="flex flex-row-reverse items-center">
              <span className="absolute p-4">
                {
                  <MdEmail
                    size={24}
                    color={
                      document.documentElement.classList.contains('dark')
                        ? '#ffffff'
                        : themes.colors.primary
                    }
                  />
                }
              </span>
              <Input
                ref={emailInputRef}
                type="email"
                placeholder="E-mail"
                className={`w-full pr-12
                ${errorForm.has('EMAIL_EMPTY') && 'border-red-700'}`}
              />
            </div>
            {errorForm.has('EMAIL_ALREDY_EXISTS') && (
              <ParagraphError>E-mail já cadastrado</ParagraphError>
            )}
            {errorForm.has('EMAIL_EMPTY') && (
              <ParagraphError>E-mail não pode ser vazio</ParagraphError>
            )}
            <div className="flex flex-row-reverse items-center">
              <span className="absolute p-4" onClick={handlePassword}>
                {showPassword ? (
                  <FaEye
                    size={24}
                    color={
                      document.documentElement.classList.contains('dark')
                        ? '#ffffff'
                        : themes.colors.primary
                    }
                  />
                ) : (
                  <FaEyeSlash
                    size={25}
                    color={
                      document.documentElement.classList.contains('dark')
                        ? '#ffffff'
                        : themes.colors.primary
                    }
                  />
                )}
              </span>
              <Input
                ref={passwordInputRef}
                type={showPassword ? 'text' : 'password'}
                placeholder="Senha"
                className={`
                w-full pr-12
                ${
                  errorForm.has('PASSWORD_LOW_SECURITY') ? 'border-red-700' : ''
                }`}
              />
            </div>
            {errorForm.has('PASSWORD_LOW_SECURITY') && (
              <ParagraphError>
                A senha deve incluir: 8 caracteres, letras maiúsculas,
                minúsculas, números e símbolos.
              </ParagraphError>
            )}
            <Button className="dark:bg-third">Registrar</Button>
            <p className="text-primary dark:text-secundary text-center font-medium ">
              Já tem uma conta?{' '}
              <Link href="./login">
                <u className="text-white">Entre aqui.</u>
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  )
}
