import { Dispatch, createContext, useState } from 'react'

export const ThemeContext = createContext<{
  theme: string
  setTheme: Dispatch<'light' | 'dark'>
} | null>(null)
