import { Button } from '@/components/ui/commons/button';
import { IThemeData } from '@/models/themes/themes.interface';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type TextsOfThemesProps = {
  setSection: (item: string) => void;
  theme: IThemeData;
};

export function TextsOfThemes({ setSection, theme }: TextsOfThemesProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 overflow-y-auto max-h-[32rem] min-h-[32rem]">
      <h2 className="font-semibold text-xl text-primary dark:text-white">
        Textos motivadores
      </h2>
      {theme?.texts?.map((text, index) => {
        return (
          <>
            <h2>Texto {index + 1}</h2>
            <p
              key={index}
              dangerouslySetInnerHTML={{
                __html: text.replace('\n', '<br/>'),
              }}
            />
          </>
        );
      })}
      {theme?.figures?.map((figure, index) => {
        return (
          <>
            <h2>Image {index + 1}</h2>
            <Image
              src={figure}
              key={index}
              alt="Texto motivador"
              width={500}
              height={1000}
            />
          </>
        );
      })}
      <div className="flex self-end gap-6 absolute bottom-20">
        <Button
          className="flex items-center gap-6 min-w-32"
          onClick={() => setSection('THEME')}
        >
          <FaArrowLeft />
          Voltar
        </Button>
        <Button
          className="flex items-center gap-6 min-w-32"
          onClick={() =>
            router.push(`./essay/${theme.entity.toLowerCase()}/${theme.id}`)
          }
        >
          Avançar <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
