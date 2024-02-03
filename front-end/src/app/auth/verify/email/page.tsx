'use client'

import { Button } from '@/ui/utils/button'
import Image from 'next/image'

export default function VerifyEmail() {
  return (
    <main className="h-[90vh] flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col justify-center items-center">
        <Image
          className="rounded-md object-cover mb-10"
          src="https://i.imgur.com/MqGBqZs.gif"
          alt="Gatinho te abraçando"
          width={500}
          height={200}
        />
        <h2 className="font-semibold text-center">
          Dê uma olhada nos seus e-mails!
        </h2>
        <p className="text-center">
          Para concluir o registro confirme seu e-mail
        </p>
      </div>
      <Button>Reenviar e-mail</Button>
    </main>
  )
}
