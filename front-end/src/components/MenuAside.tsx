'use client';

import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';

import overview from '@/../public/icons/MenuAside/Graph 1.svg';
import graph from '@/../public/icons/MenuAside/Group.svg';
import exit from '@/../public/icons/MenuAside/Sign Out Icon.svg';
import filePlus from '@/../public/icons/MenuAside/file-plus 1.svg';
import settings from '@/../public/icons/MenuAside/mdi_cog-outline.svg';
import montarboard from '@/../public/icons/MenuAside/mortarboard-svgrepo-com 1.svg';
import penNewSquare from '@/../public/icons/MenuAside/pen-new-square-svgrepo-com 1.svg';
import star from '@/../public/icons/MenuAside/ranking-svgrepo-com 1.svg';
import logo from '@/../public/logo/dummy logo.svg';

import overviewWhite from '@/../public/icons/MenuAside/Graph 1 - white.svg';
import graphWhite from '@/../public/icons/MenuAside/Group - white.svg';
import exitWhite from '@/../public/icons/MenuAside/Sign Out Icon - white.svg';
import filePlusWhite from '@/../public/icons/MenuAside/file-plus 1 - white.svg';
import settingsWhite from '@/../public/icons/MenuAside/mdi_cog-outline - white.svg';
import montarboardWhite from '@/../public/icons/MenuAside/mortarboard-svgrepo-com 1 - white.svg';
import penNewSquareWhite from '@/../public/icons/MenuAside/pen-new-square-svgrepo-com 1 - white.svg';
import starWhite from '@/../public/icons/MenuAside/ranking-svgrepo-com 1 - white.svg';

const itemsNav = [
  {
    content: 'Visão geral',
    icon: overview,
    iconActive: overviewWhite,
    link: '/',
  },
  {
    content: 'Desempenho',
    icon: graph,
    iconActive: graphWhite,
    link: '/performance',
  },
  {
    content: 'Redação',
    icon: filePlus,
    iconActive: filePlusWhite,
    link: '/essay',
  },
  {
    content: 'Curso',
    icon: montarboard,
    iconActive: montarboardWhite,
    link: '/courses',
  },
  {
    content: 'Simulado',
    icon: penNewSquare,
    iconActive: penNewSquareWhite,
    link: '',
  },
  {
    content: 'Ranking',
    icon: star,
    iconActive: starWhite,
    link: '/ranking',
  },
  {
    content: 'Configurações',
    icon: settings,
    iconActive: settingsWhite,
    link: '',
  },
  {
    content: 'Sair',
    icon: exit,
    iconActive: exitWhite,
    link: '',
  },
];

export function MenuAside() {
  const path = usePathname();

  return (
    <aside className={`flex flex-col justify-start gap-12 min-h-screen p-8`}>
      <div className="flex gap-6 items-center pl-2">
        <Image src={logo} alt="Logo" width={48} height={48} />
        <h1 className="text-[#151D48] dark:text-white font-bold text-2xl">
          Estuda<span className="text-[#247CFF]">AI</span>
        </h1>
      </div>

      <ul className="flex flex-col gap-10">
        {itemsNav.map((item, index) => {
          return (
            <li
              key={index}
              className={`text-primary dark:text-white pl-2 ${path === item.link ? 'py-3 bg-third rounded-2xl text-white font-semibold' : ''}`}
            >
              <Link
                href={item.link}
                className="flex items-center gap-6 font-medium"
              >
                <Image
                  className="max-w-6 max-h-6"
                  src={(path === item.link && item.iconActive) || item.icon}
                  alt="Icone"
                />
                {item.content}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}