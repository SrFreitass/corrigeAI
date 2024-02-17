'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { TbMathFunction } from 'react-icons/tb';
import { CourseCard } from './CourseCard';

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
          <section className="flex flex-wrap gap-8">
            {['', '', '', '', '', '', ''].map((item, index) => {
              return (
                <CourseCard
                  key={index}
                  tags={['Matemática', 'Iniciante']}
                  teacher="Guilherme Freitas"
                  title="Matemática básica para o ENEM"
                  icon={<TbMathFunction size={28} color="#ffffff" />}
                />
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}
