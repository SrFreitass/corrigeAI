import { DialogFooter } from '@/components/ui/commons/dialog';

type FooterModalProps = {
  section: string;
  setSection: (item: string) => void;
};

export function FooterModal({ section, setSection }: FooterModalProps) {
  return (
    <DialogFooter className="w-full !justify-center text-white">
      <div className="z-10 absolute bottom-6 px-6 w-full flex justify-between items-center">
        <div
          className="flex items-center gap-2"
          onClick={() => setSection('CRITERIA')}
        >
          <span
            className={`w-8 h-8 rounded-full bg-zinc-600 grid place-items-center ${section === 'CRITERIA' && '!bg-third'}`}
          >
            1
          </span>
          <p
            className={`text-secundary ${section === 'CRITERIA' && 'dark:text-white'}`}
          >
            Críterios
          </p>
        </div>
        <hr className="w-1/3" />
        <div
          className="flex items-center gap-2"
          onClick={() => setSection('THEME')}
        >
          <span
            className={`w-8 h-8 rounded-full bg-zinc-600 grid place-items-center ${section === 'THEME' && '!bg-third'}`}
          >
            2
          </span>
          <p
            className={`text-secundary ${section === 'THEME' && 'dark:text-white'}`}
          >
            Tema
          </p>
        </div>
        <hr className="w-1/3" />
        <div
          className="flex items-center gap-2"
          onClick={() => setSection('TEXTSOFTHEME')}
        >
          <span
            className={`w-8 h-8 rounded-full bg-zinc-600 grid place-items-center ${section === 'TEXTSOFTHEME' && '!bg-third'}`}
          >
            3
          </span>
          <p
            className={`text-secundary ${section === 'TEXTSOFTHEME' && 'dark:text-white'}`}
          >
            Textos motivadores
          </p>
        </div>
      </div>
    </DialogFooter>
  );
}
