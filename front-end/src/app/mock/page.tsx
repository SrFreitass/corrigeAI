'use client';

import cat from '@/../public/images/cat.svg';
import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import Image from 'next/image';
export default function QuestionsPage() {
  return (
    <>
      <div className="flex">
        <MenuAside />
        <main className="w-full gap-8 mx-10">
          <div>
            <Header />
            <div className="w-full h-[80vh] flex flex-col items-center justify-center">
              <Image src={cat} alt="Gato bala" />
              <SubTitleSection className="w-[30%] text-center">
                Simulados estarão disponíveis em breve. Nossa equipe ainda está
                trabalhando nessa funcionabilidade.
              </SubTitleSection>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
