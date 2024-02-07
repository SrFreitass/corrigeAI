import { Avatar } from '@/ui/utils/avatar'
import { Input } from '@/ui/utils/input'
import avatar from '@/../public/images/avatar.png'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { Switch } from '@mui/material'
import { useContext, useState } from 'react'
import { ThemeContext } from '@/app/context'

export function Header() {
  const { theme, setTheme } = useContext(ThemeContext)

  const handleTheme = (e: InputEvent) => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  console.log(theme)

  return (
    <header className="px-10 py-8 w-full flex items-center justify-between">
      <div>
        <PiMagnifyingGlass
          className="absolute mt-3 ml-3"
          size={20}
          color="#5D5FEF"
        />
        <Input
          type="text"
          placeholder="Pesquise alguma coisa..."
          className="w-96 pl-10 outline-third"
        />
      </div>
      <div className="flex gap-4">
        <Switch onChange={handleTheme} checked={theme != 'light'} />
        <Avatar src={avatar.src} />
        <div className="flex flex-col justify-center">
          <span className="font-medium text-primary dark:text-white">
            Freitas
          </span>
          <span className="text-secundary dark:">Estudante</span>
        </div>
      </div>
    </header>
  )
}
