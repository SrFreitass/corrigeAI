'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { Aside } from './Components/AsideThemes';
import { CardsInfoEssays } from './Components/CardInfoEssays';
import { ChartEssays } from './Components/ChartEssays';
import { ModalNewEssay } from './Components/ModalNewEssay';
import { TopSkills } from './Components/TopSkills';

export default function Essay() {
  return (
    <div className="flex">
      <MenuAside />
      <div className="w-full">
        <Header />
        <main className="w-full flex gap-8 px-8">
          <div className="flex flex-col gap-8">
            <Section className="!flex-row justify-between">
              <div>
                <TitleSection>Redação</TitleSection>
                <SubTitleSection>
                  Faça sua redação e veja o resultado em segundos!
                </SubTitleSection>
              </div>
              <ModalNewEssay />
            </Section>
            <div className="flex gap-6">
              <CardsInfoEssays statistics="750" content="Média" />
              <CardsInfoEssays statistics="890" content="Maior nota" />
              <CardsInfoEssays statistics="12" content="Redações" />
            </div>
            <TopSkills />
            <ChartEssays />
          </div>
          <Aside />
        </main>
      </div>
    </div>
  );
}
