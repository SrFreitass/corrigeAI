import Image from 'next/image';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdLibraryBooks } from 'react-icons/md';
import { BsFillMoonStarsFill, BsFillMortarboardFill } from 'react-icons/bs';
import { FaRegStar } from 'react-icons/fa';
import { FaRegPenToSquare } from 'react-icons/fa6';

import Link from 'next/link';
import MenuAside from './_components/MenuAside';
import Dashboard from './_components/Dashbord';

export default function Home() {
    return (
        <main>
            <MenuAside />
            <Dashboard />
        </main>
    );
}
