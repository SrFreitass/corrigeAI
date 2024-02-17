'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

export default function ExamPage() {
  const [userExam, setUserExam] = useState([{}]);
  const [optionSelected, setOptionSelected] = useState(false);

  const handleOptions = () => {
    setOptionSelected(true);
  };

  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header></Header>
        <div className="px-10">
          <section className="flex flex-col gap-4 p-8 border-2 border-third rounded-bg min-h-[50vh]">
            <TitleSection>01.</TitleSection>
            <SubTitleSection>
              (Enem 2022) Uma cozinheira produz docinhos especiais por
              encomenda. Usando uma receita-base de massa, ela prepara uma
              porção, com a qual produz 50 docinhos maciços de formato esférico,
              com 2 cm de diâmetro. Um cliente encomenda 150 desses docinhos,
              mas pede que cada um tenha formato esférico com 4 cm de diâmetro.
              A cozinheira pretende preparar o número exato de porções da
              receita-base de massa necessário para produzir os docinhos dessa
              encomenda. Quantas porções da receita-base de massa ela deve
              preparar para atender esse cliente?
            </SubTitleSection>
            <form className="flex flex-col justify-start gap-6">
              <div className="flex items-center gap-4 text-primary dark:text-white">
                <Input type="radio" onClick={handleOptions} name="Option" />
                <label className="font-medium">A - 2</label>
              </div>
              <div className="flex items-center gap-4 text-primary dark:text-white">
                <Input type="radio" onClick={handleOptions} name="Option" />
                <label className="font-medium">B - 5</label>
              </div>
              <div className="flex items-center gap-4 text-primary dark:text-white">
                <Input type="radio" onClick={handleOptions} name="Option" />
                <label className="font-medium">C - 10</label>
              </div>
              <div className="flex items-center gap-4 text-primary dark:text-white">
                <Input type="radio" onClick={handleOptions} name="Option" />
                <label className="font-medium">D - 24</label>
              </div>
              <div className="flex items-center gap-4 text-primary dark:text-white">
                <Input type="radio" onClick={handleOptions} name="Option" />
                <label className="font-medium">E - 26</label>
              </div>
              {optionSelected && (
                <Button className="flex gap-6 items-center">
                  Proxima
                  <FaArrowRight color="white" />
                </Button>
              )}
            </form>
          </section>
        </div>
      </main>
    </div>
  );
}
