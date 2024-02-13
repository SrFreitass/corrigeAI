'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Input } from '@/components/ui/commons/input';
import { TextArea } from '@/components/ui/commons/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useParams } from 'next/navigation';
import { ChangeEvent, FocusEvent, useState } from 'react';

export default function WritingEssay() {
  const { criteria, theme } = useParams();
  const [texts, setTexts] = useState(false);
  const [paragraphs, setParagraphs] = useState(0);
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [serif, setSerif] = useState(false);
  const [fontSize, setFontSize] = useState('text-base');

  const handleEssay = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCharacters(e.target.value.length);
    setWords(
      [...e.target.value.matchAll(/ /g)].length +
        1 +
        [...e.target.value.matchAll(/\n/g)].length +
        1,
    );
    setParagraphs([...e.target.value.matchAll(/\n/g)].length + 1);
  };

  const observerSelect = (e: FocusEvent<HTMLButtonElement>) => {
    const size = e.target.querySelector('span')?.textContent;

    if (size === null) return;

    if (size === '16px') return setFontSize('text-base');

    if (size === '18px') return setFontSize('text-lg');

    if (size === '24px') return setFontSize('text-xl');
  };

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
              <div className="w-full flex justify-between bg-third text-white rounded-b-xl px-4 relative bottom-8 -z-0">
                <span>Caracteres {characters}</span>
                <span>Palavras {words}</span>
                <span>Parágrafos {paragraphs}</span>
              </div>
            </div>
            <div className="flex gap-6 relative">
              <div className="flex items-center gap-2 text-primary dark:text-white">
                <p>Aparecer textos motivadores?</p>{' '}
                <Input
                  type="checkbox"
                  onChange={() => setTexts(!texts)}
                  value={`${texts}`}
                />
              </div>
              <div className="flex items-center gap-2 text-primary dark:text-white">
                <p>Fonte serifada?</p>{' '}
                <Input
                  type="checkbox"
                  onChange={() => setSerif(!serif)}
                  value={`${texts}`}
                />
              </div>
              <div className="w-32 flex items-center gap-2 text-primary dark:text-white">
                <p className="min-w-40">Tamanho da fonte </p>
                <Select>
                  <SelectTrigger onFocus={observerSelect}>
                    <SelectValue placeholder="16px" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16">16px</SelectItem>
                    <SelectItem value="18">18px</SelectItem>
                    <SelectItem value="24">24px</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>
          {texts ? (
            <section
              className={`${texts ? 'w-1/2' : ''} px-10 flex flex-col gap-4`}
            >
              <>
                <div>
                  <h2 className="font-medium text-primary dark:text-white">
                    Texto 1
                  </h2>
                  <p className="text-secundary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis facilisis tincidunt fermentum. Fusce in accumsan arcu.
                    Morbi aliquet tincidunt augue, nec rhoncus elit consectetur
                    eget. Donec eget ligula non metus porta tincidunt. Ut tortor
                    dolor, consectetur eu auctor vel, egestas vitae urna.
                    Aliquam erat volutpat. Vivamus ut mattis ipsum. In tortor
                    eros, faucibus sit amet sollicitudin aliquet, vestibulum
                    eget enim. Mauris suscipit rhoncus augue nec maximus. Aenean
                    at velit dolor. Sed ac porttitor justo. Vestibulum molestie
                    mi in gravida porta. Etiam sapien tellus, dictum quis lorem
                    at, molestie venenatis dui. Pellentesque habitant morbi
                    tristique senectus et netus et malesuada fames ac turpis
                    egestas. Mauris sit amet diam ultrices, consectetur sem
                    eget, pulvinar nisi. Maecenas quis lorem varius, feugiat
                    erat quis, rutrum sem.
                  </p>
                </div>
                <div>
                  <h2 className="font-medium text-primary dark:text-white">
                    Texto 2
                  </h2>
                  <p className="text-secundary">
                    Donec rhoncus efficitur ligula vel congue. Nunc sit amet
                    ultrices elit. Vestibulum in porttitor est, vel posuere
                    turpis. Quisque in dolor enim. Fusce velit felis, hendrerit
                    ac tempus sed, mollis eu turpis. Ut eu scelerisque turpis.
                    Donec magna sapien, molestie ac nibh ac, placerat pretium
                    velit. Morbi felis urna, consequat mattis nulla id, accumsan
                    aliquam orci. Phasellus tempus erat venenatis elit
                    pellentesque, quis faucibus metus faucibus. Fusce a leo at
                    enim venenatis porta in sit amet enim. Integer lobortis
                    vitae purus non facilisis.
                  </p>
                </div>
              </>
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
