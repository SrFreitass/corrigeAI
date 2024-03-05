'use client';

import { ThemeContext } from '@/context';
import { Poppins } from 'next/font/google';
import { useState } from 'react';
import './globals.css';

export const poppins = Poppins({
  subsets: ['devanagari'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   if (
  //     window.matchMedia('(prefers-color-scheme: dark)').matches ||
  //     localStorage.getItem('theme') === 'dark'
  //   ) {
  //     document.documentElement.classList.add('dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //   }
  // }, []);

  const [theme, setTheme] = useState<'light' | 'dark'>(
    'light',
    // window.matchMedia('(prefers-color-scheme: light)') ? 'light' : 'dark',
  );

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <html lang="pt-BR" className="bg-[#FAFBFC] ">
        <body
          className={`${poppins.className} dark:bg-[#05071D] dark:bg-bg bg-center bg-cover bg-no-repeat w-full min-h-screen`}
        >
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
