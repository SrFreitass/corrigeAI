'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { FaReact } from 'react-icons/fa';
import { CardSubject } from './components/CardSubject';

export default function PreparatoryPage() {
  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full flex flex-col gap-8">
        <Header />
        <div className="flex flex-col gap-8 px-10">
          <Section>
            <TitleSection>Simulados</TitleSection>
            <SubTitleSection>
              Diversos simulados do ENEM prontos e personalizados!
            </SubTitleSection>
          </Section>
          <section className="flex flex-col gap-8">
            <TitleSection className="flex items-center gap-2">
              ENEM <hr className="w-full" />
            </TitleSection>
            <div className="flex flex-wrap gap-6">
              <CardSubject
                description="45 Questões de Biologia, Física e Qímica"
                icon={<FaReact size={28} color="247CFF" />}
                subject="Ciências da Natureza"
                subjectId=""
              />
              <CardSubject
                description="45 Questões de Biologia, Física e Qímica"
                icon={<FaReact size={28} color="247CFF" />}
                subject="Ciências da Natureza"
                subjectId=""
              />
              <CardSubject
                description="45 Questões de Biologia, Física e Qímica"
                icon={<FaReact size={28} color="247CFF" />}
                subject="Ciências da Natureza"
                subjectId=""
              />
              <CardSubject
                description="45 Questões de Biologia, Física e Qímica"
                icon={<FaReact size={28} color="247CFF" />}
                subject="Ciências da Natureza"
                subjectId=""
              />
              <CardSubject
                description="45 Questões de Biologia, Física e Qímica"
                icon={<FaReact size={28} color="247CFF" />}
                subject="Ciências da Natureza"
                subjectId=""
              />
              <CardSubject
                description="45 Questões de Biologia, Física e Qímica"
                icon={<FaReact size={28} color="247CFF" />}
                subject="Ciências da Natureza"
                subjectId=""
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
