'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import { TextArea } from '@/components/ui/commons/textarea';
import { getEssayTheme } from '@/http/essay/get.essayTheme';
import { IThemeData } from '@/models/themes/themes.interface';
import { useParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { EssayInfo } from './components/EssaInfo';
import { EssayOptions } from './components/EssayOptions';
import { TextsOfTheme } from './components/TextsOfTheme';

export default function WritingEssay() {
  const { criteria, theme } = useParams();
  const [essayTheme, setEssayTheme] = useState<IThemeData>();
  const [texts, setTexts] = useState(false);
  const [paragraphs, setParagraphs] = useState(0);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [serif, setSerif] = useState(false);
  const [fontSize, setFontSize] = useState('text-base');

  useEffect(() => {
    const fetchEssayTheme = async () => {
      const essayTheme = await getEssayTheme({
        entity: criteria as string,
        essayThemeId: theme as string,
      });
      setEssayTheme(essayTheme as IThemeData);
    };
    fetchEssayTheme();
  }, []);

  const handleEssay = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharacters(e.target.value.length);
    setWords([...e.target.value.matchAll(/ /g)].length + 1);
    setParagraphs([...e.target.value.matchAll(/\n/g)].length + 1);
  };

  const sendEssay = () => {};

  return (
    <main className="flex">
      <MenuAside />
      <div className="w-full">
        <Header />
        <div className="flex">
          <section
            className={`${texts ? 'w-1/2' : 'w-full'} flex flex-col gap-4 px-10`}
          >
            <Input placeholder="Título da redação (opcional)" />
            <div className="w-full">
              <TextArea
                placeholder="Sua redação"
                className={`w-full min-h-[40rem] 
                ${serif && 'font-serif'}
                ${fontSize}
                `}
                onChange={handleEssay}
              />
              <EssayInfo
                characters={characters}
                paragraphs={paragraphs}
                words={words}
              />
              <div className="flex flex-col">
                <EssayOptions
                  serif={serif}
                  setFontSize={setFontSize}
                  setSerif={setSerif}
                  setTexts={setTexts}
                  texts={texts}
                />
                <Button className="self-end">Enviar redação</Button>
              </div>
            </div>
          </section>
          {texts && essayTheme ? (
            <TextsOfTheme essayTheme={essayTheme} />
          ) : null}
        </div>
      </div>
    </main>
  );
}
