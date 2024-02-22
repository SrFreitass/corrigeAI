'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { Courses } from './components/Courses';

export default function CoursesPage() {
  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header />
        <div className="px-10">
          <Section>
            <TitleSection>Catálogo</TitleSection>
            <SubTitleSection>
              Navegue por todos os conteúdos do EstudaAI :){' '}
              <span className="text-third">100% gratuito!</span>
            </SubTitleSection>
          </Section>
          <section>
            <Courses />
          </section>
        </div>
      </main>
    </div>
  );
}
