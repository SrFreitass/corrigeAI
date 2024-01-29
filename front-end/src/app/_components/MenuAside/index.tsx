'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BiHomeAlt2, BiMenu, BiX } from 'react-icons/bi';
import { BsFillMortarboardFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';
import { MdLibraryBooks } from 'react-icons/md';
import photo from '../../../../public/photo1.jpg';
import logo from '../../../../public/logo/corrigiAI.svg';
import logoMini from '../../../../public/logo/corrigiAI_mini.svg';
import { useState } from 'react';
import { link } from 'fs';

export default function MenuAside() {
    const [minimize, setMinimize] = useState<boolean>(false);
    const itemsNav = [
        {
            content: 'Início',
            icon: <BiHomeAlt2 size={24} />,
            link: '/',
        },
        {
            content: 'Redação',
            icon: <MdLibraryBooks size={24} />,
            link: '/essay',
        },
        {
            content: 'Curso',
            icon: <BsFillMortarboardFill size={24} />,
            link: '',
        },
        {
            content: 'Simulado',
            icon: <FaRegPenToSquare size={24} />,
            link: '',
        },
        {
            content: 'Ranking',
            icon: <FaRegStar size={24} />,
            link: '',
        },
    ];

    return (
        <aside className="flex flex-col justify-between min-h-screen p-8 bg-slate-100">
            <div
                className={`flex flex-col ${
                    minimize ? 'items-center' : 'items-start'
                }  gap-8`}
            >
                <Image
                    src={minimize ? logoMini : logo}
                    alt="Logo CorrigiAI"
                    width={minimize ? 72 : 128}
                />
                <button
                    onClick={() => {
                        setMinimize(!minimize);
                    }}
                >
                    {minimize ? <BiX size={28} /> : <BiMenu size={28} />}
                </button>
                {itemsNav.map((item, index) => {
                    return (
                        <div className="flex gap-4">
                            {item.icon}
                            {minimize ? null : (
                                <Link href={item.link}>{item.content}</Link>
                            )}
                        </div>
                    );
                })}
            </div>
            <Image
                src={photo}
                className="rounded-full object-cover  w-14 h-14 border-2 border-secundary"
                alt="Avatar"
            />
        </aside>
    );
}
