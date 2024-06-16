'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { Filters } from './components/Filters';

export default function QuestionsPage() {
  return (
    <>
      <div className="flex">
        <MenuAside />
        <main className="w-full gap-8 mx-10">
          <div>
            <Header />
            <Section>
              <TitleSection>Busca de questões</TitleSection>
              <SubTitleSection>Filtro de questões</SubTitleSection>
            </Section>
            <Filters />
          </div>
        </main>
      </div>
    </>
  );
}
