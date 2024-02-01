'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BiHomeAlt2, BiMenu, BiX } from 'react-icons/bi'
import { BsFillMortarboardFill } from 'react-icons/bs'
import { FaRegStar } from 'react-icons/fa'
import { FaRegPenToSquare } from 'react-icons/fa6'
import { MdLibraryBooks } from 'react-icons/md'
import photo from '../../../public/photo1.jpg'
import logo from '../../../public/logo/corrigiAI_logo.svg'
import logoMini from '../../../public/logo/corrigiAI_logo_mini.svg'
import { useState } from 'react'
import { Avatar } from '../../ui/utils/avatar'
import { themes } from '@/app/styles/theme'

export default function MenuAside() {
  const [minimize, setMinimize] = useState<boolean>(false)
  const itemsNav = [
    {
      content: 'Início',
      icon: <BiHomeAlt2 size={24} color={themes.colors.primary} />,
      link: '/',
    },
    {
      content: 'Redação',
      icon: <MdLibraryBooks size={24} color={themes.colors.primary} />,
      link: '/essay',
    },
    {
      content: 'Curso',
      icon: <BsFillMortarboardFill size={24} color={themes.colors.primary} />,
      link: '',
    },
    {
      content: 'Simulado',
      icon: <FaRegPenToSquare size={24} color={themes.colors.primary} />,
      link: '',
    },
    {
      content: 'Ranking',
      icon: <FaRegStar size={24} color={themes.colors.primary} />,
      link: '',
    },
  ]

  return (
    <aside
      className={`flex flex-col justify-between min-h-screen p-8  ${minimize ? '' : 'pr-20'} bg-slate-100`}
    >
      <div
        className={`flex flex-col ${
          minimize ? 'items-center' : 'items-start'
        }  gap-8`}
      >
        <Image
          src={minimize ? logoMini : logo}
          alt="Logo CorrigiAI"
          width={minimize ? 48 : 128}
          height={64}
        />
        <button
          onClick={() => {
            setMinimize(!minimize)
          }}
        >
          {minimize ? <BiX size={28} /> : <BiMenu size={28} />}
        </button>
        {itemsNav.map((item, index) => {
          return (
            <div className="flex gap-4" key={index}>
              <Link
                href={item.link}
                className="font-semibold text-primary flex gap-4"
              >
                {item.icon}
                {minimize ? null : item.content}
              </Link>
            </div>
          )
        })}
      </div>
      <Avatar src={photo.src} />
    </aside>
  )
}
