'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';

import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { ListUsers } from './components/ListUsers';

export default function RankingPage() {
  return (
    <>
      <div className="flex">
        <MenuAside />
        <div className="w-full">
          <Header />
          <main className="flex flex-col gap-8 px-8">
            <Section className="p-8 shadow-md bg-white dark:bg-dark rounded-bg">
              <TitleSection>Ranking</TitleSection>
              <SubTitleSection>
                Os estudantes que vêm dando o seu melhor na plataforma!
              </SubTitleSection>
            </Section>
            <ListUsers />
          </main>
        </div>
      </div>
    </>
  );
}
