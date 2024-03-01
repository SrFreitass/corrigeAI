import { Input } from '@/components/ui/commons/input';
import { getThemes } from '@/http/essay/get.themes';
import { IThemeData } from '@/models/themes/themes.interface';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type sections = 'CRITERIA' | 'THEME' | 'TEXTSOFTHEME';

type ThemesProps = {
  setSection: (item: sections) => void;
  setTheme: Dispatch<SetStateAction<IThemeData | null>>;
};

export function Themes({ setSection, setTheme }: ThemesProps) {
  const [themes, setThemes] = useState<IThemeData[] | null>(null);

  const handleTheme = (theme: IThemeData) => {
    if (!theme) return;
    setSection('TEXTSOFTHEME');
    setTheme(theme);
  };

  useEffect(() => {
    const fetchThemes = async () => {
      const themes = await getThemes(1);
      setThemes(themes);
    };

    fetchThemes();
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Input placeholder="Pesquise o tema que você quer..." />
      <div className="overflow-y-auto max-h-[32rem] min-h-[32rem] w-full mt-5 flex flex-col gap-6 justify-start">
        {themes?.map((theme, index) => {
          return (
            <div
              key={index}
              className="flex gap-4"
              onClick={() => handleTheme(theme)}
            >
              <Image
                src={theme.essay_img}
                width={200}
                height={125}
                alt="Imagem ilustrando o tema da redação"
                className="rounded-xl"
              />
              <div className="flex flex-col gap-2">
                <span className="text-secundary">Tema</span>
                <h3 className="text-primary dark:text-white font-semibold text-xl w-[80%]">
                  {theme.title}
                </h3>
                <h4 className="text-primary dark:text-white font-medium">
                  {theme.entity} {theme.year}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
