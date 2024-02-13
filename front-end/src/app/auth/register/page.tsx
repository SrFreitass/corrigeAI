'use client';

import { Toaster } from 'react-hot-toast';
import { FormRegister } from './components/FormRegister';

export default function Register() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="flex items-center justify-center h-[90vh] animate-appear-from-below">
        <FormRegister />
      </main>
    </>
  );
}
