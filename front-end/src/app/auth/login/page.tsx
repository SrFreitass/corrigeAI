'use client';

import { Toaster } from 'react-hot-toast';
import { FormLogin } from './components/FormLogin';

export default function Login() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="flex items-center justify-center h-[90vh] animate-appear-from-below">
        <FormLogin />
      </main>
    </>
  );
}
