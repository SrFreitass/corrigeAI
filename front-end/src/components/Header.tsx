import avatar from '@/../public/images/avatar.png';
import { Avatar } from '@/components/ui/commons/avatar';
import { Input } from '@/components/ui/commons/input';
import { ThemeContext } from '@/context';
import { Switch } from '@mui/material';
import { useContext } from 'react';
import { PiMagnifyingGlass } from 'react-icons/pi';

export function Header() {
  const Theme = useContext(ThemeContext);

  const handleTheme = () => {
    Theme?.setTheme(Theme.theme === 'light' ? 'dark' : 'light');
    if (Theme?.theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="py-8 px-10 w-full flex items-center justify-between">
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
        <Switch onChange={handleTheme} checked={Theme?.theme !== 'light'} />
        <Avatar src={avatar.src} />
        <div className="flex flex-col justify-center">
          <span className="font-medium text-primary dark:text-white">
            Freitas
          </span>
          <span className="text-secundary dark:">Desenvolvedor</span>
        </div>
      </div>
    </header>
  );
}
