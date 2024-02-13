import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type sections = 'CRITERIA' | 'THEME' | 'TEXTSOFTHEME';

type ThemesProps = {
  setSection: (item: sections) => void;
};

const themes = [
  {
    title: 'Viver e aprender',
    ilustrationSrc: 'https://i.imgur.com/8NmXo6e.png',
    entity: 'ENEM',
    year: 1998,
  },
];

export function Themes({ setSection }: ThemesProps) {
  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Pesquise o tema que você quer..." />
      <div className="overflow-y-auto max-h-[32rem] min-h-[32rem] w-full mt-5 flex flex-col gap-6 justify-start">
        {[...themes, ...themes, ...themes, ...themes, ...themes].map(
          (item, index) => {
            return (
              <div key={index} className="flex gap-4">
                <Image
                  src={item.ilustrationSrc}
                  width={200}
                  height={125}
                  alt="Imagem ilustrando o tema da redação"
                  className="rounded-xl"
                />
                <div className="flex flex-col gap-2">
                  <span className="text-secundary">Tema</span>
                  <h3 className="text-primary dark:text-white font-semibold text-xl">
                    {item.title}
                  </h3>
                  <h4 className="text-primary dark:text-white font-medium">
                    {item.entity} {item.year}
                  </h4>
                </div>
              </div>
            );
          },
        )}
      </div>
      <div className="flex self-end gap-6 absolute bottom-20">
        <Button
          className="flex items-center gap-6 min-w-32"
          onClick={() => setSection('CRITERIA')}
        >
          <FaArrowLeft />
          Voltar
        </Button>
        <Button
          className="flex items-center gap-6 min-w-32"
          onClick={() => setSection('TEXTSOFTHEME')}
        >
          Avançar <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
