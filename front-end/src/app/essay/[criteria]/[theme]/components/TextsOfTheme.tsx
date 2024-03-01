import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/commons/dialog';
import { IThemeData } from '@/models/themes/themes.interface';
import Image from 'next/image';

interface TextsOfThemeProps {
  essayTheme: IThemeData;
}

export function TextsOfTheme({ essayTheme }: TextsOfThemeProps) {
  return (
    <section className={`w-1/2 px-10 flex flex-col gap-4`}>
      <div className="flex flex-col gap-4 overflow-y-scroll max-h-[44rem]">
        <h2 className="w-[90%] font-semibold text-lg text-primary dark:text-white">
          {essayTheme?.title}
        </h2>
        {essayTheme.texts.map((text, index) => {
          return (
            <>
              <h2>Texto {index + 1}</h2>
              <p className="text-secundary">{text}</p>
            </>
          );
        })}
        <br />
        {essayTheme?.figures?.map((figure, index) => {
          return (
            <>
              <Dialog>
                <DialogContent>
                  <Image
                    src={figure}
                    alt="Texto motivador"
                    key={index}
                    width={300}
                    height={200}
                    className="w-[100%] pt-4"
                  />
                </DialogContent>
                <DialogTrigger asChild>
                  <Image
                    src={figure}
                    alt="Texto motivador"
                    key={index}
                    width={300}
                    height={200}
                  />
                </DialogTrigger>
              </Dialog>
              <br />
            </>
          );
        })}
      </div>
    </section>
  );
}
