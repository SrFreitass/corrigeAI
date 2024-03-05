'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import { TextArea } from '@/components/ui/commons/textarea';
import { getEssayTheme } from '@/http/essay/get.essayTheme';
import { postEssay } from '@/http/essay/post.essay';
import { IThemeData } from '@/models/themes/themes.interface';
import { useParams, useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { EssayInfo } from './components/EssaInfo';
import { EssayOptions } from './components/EssayOptions';
import { Loader } from './components/Loader';
import { TextsOfTheme } from './components/TextsOfTheme';

export default function WritingEssay() {
  const router = useRouter();
  const { criteria, theme } = useParams() as {
    criteria: string;
    theme: string;
  };
  const [seendingEssay, setSeedingEssay] = useState(false);
  const [essayTheme, setEssayTheme] = useState<IThemeData>();
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
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

  const sendEssay = async () => {
    const essay = JSON.stringify(textAreaRef.current?.value).replaceAll(
      '"',
      '',
    );

    if (!essay) return;
    setSeedingEssay(true);
    const result = await postEssay({ entity: criteria, essay, themeId: theme });
    router.push(`/essay/result/${result.id}`);
  };

  return (
    <main className="flex">
      <MenuAside />
      <div className="w-full">
        <Header />
        {seendingEssay ? (
          <section className="h-[80vh] flex flex-col justify-center items-center">
            <Loader />
            <p className="text-secundary">
              O corretor está corrigindo sua redação!
            </p>
          </section>
        ) : (
          <div className="flex">
            <section
              className={`${texts ? 'w-1/2' : 'w-full'} flex flex-col gap-4 px-10`}
            >
              <Input placeholder="Título da redação (opcional)" />
              <div className="w-full flex flex-col">
                <TextArea
                  placeholder="Sua redação"
                  className={`w-full min-h-[40rem] 
                ${serif && 'font-serif'}
                ${fontSize}
                `}
                  ref={textAreaRef}
                  onChange={handleEssay}
                />
                <EssayInfo
                  characters={characters}
                  paragraphs={paragraphs}
                  words={words}
                />
                <EssayOptions
                  serif={serif}
                  setFontSize={setFontSize}
                  setSerif={setSerif}
                  setTexts={setTexts}
                  texts={texts}
                />
                <Button
                  className="self-end mt-2 flex items-center gap-4"
                  onClick={sendEssay}
                >
                  Enviar redação <IoSend color="#ffffff" />
                </Button>
              </div>
            </section>
            {texts && essayTheme ? (
              <TextsOfTheme essayTheme={essayTheme} />
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
