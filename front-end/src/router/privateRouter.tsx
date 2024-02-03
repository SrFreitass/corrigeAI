'use client'

import { verifyToken } from '@/app/http/get.verifyToken'
import { RedirectType, redirect, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function PrivateRouter({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState('LOADING')

  useEffect(() => {
    const verify = async () => {
      const tokenSession = sessionStorage.getItem('token')
      const tokenStorage = localStorage.getItem('token')

      try {
        if (tokenSession) {
          await verifyToken({ token: tokenSession })
          setAuth('AUTHORIZED')
        }

        if (tokenStorage) {
          await verifyToken({ token: tokenStorage })
          setAuth('AUTHORIZED')
        }
      } catch (error) {
        setAuth('UNAUTHORIZED')
      }
    }
    verify()
  }, [])

  return (
    <>
      {auth === 'LOADING' && <div>Carregando...</div>}
      {auth === 'AUTHORIZED' && <>{children}</>}
      {auth === 'UNAUTHORIZED' && redirect('/auth/login', RedirectType.replace)}
    </>
  )
}
