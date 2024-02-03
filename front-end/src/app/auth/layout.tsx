import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo/corrigiAI_logo.svg'

export default function PageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="max-w-[1440px] m-auto p-8">
        <Image src={logo} alt="Logo CorrigiAI" width={100} quality={100} />
      </header>
      {children}
    </>
  )
}
