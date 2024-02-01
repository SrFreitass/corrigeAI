'use client'

import { Button } from '@/ui/utils/button'
import { Input } from '@/ui/utils/input'
import logo from '../../../../public/logo/corrigiAI_logo.svg'
import googleLogo from '../../../../public/logo/google_logo.svg'
import photoRegister from '../../../../public/images/login_photo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Login() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  const handleFormSubmit = () => {}

  return (
    <main className="flex items-center justify-between h-screen">
      <section className="h-full py-5 flex justify-center w-1/2 bg-blue-5">
        <Image
          className="w-5/6"
          src={photoRegister}
          alt="Estudante feliz com caderno na mão"
          quality={100}
        />
      </section>
      <section className="flex flex-col items-center gap-4 w-1/2">
        <form className="flex flex-col gap-5 w-1/2">
          <div>
            <Image
              className="w-24 mb-4"
              src={logo}
              alt="Logo CorrigiAI"
              quality={100}
            />
            <h1 className="text-4xl font-bold">Entrar</h1>
            <h2 className="text-gray-4">Faça login para entrar em sua conta</h2>
          </div>
          <Input ref={emailInputRef} type="text" placeholder="E-mail" />
          <Input ref={passwordInputRef} type="password" placeholder="Senha" />
          <div className="flex gap-2">
            <Input type="checkbox" />
            <p className="font-medium">Manter conectado</p>
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
  )
}
