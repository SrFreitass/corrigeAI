import { Button } from '@/components/ui/commons/button';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/commons/dialog';
import { IThemeData } from '@/models/themes/themes.interface';
import { useState } from 'react';
import { PiFilePlus } from 'react-icons/pi';

import { Criteria } from './subComponents/criteria';
import { FooterModal } from './subComponents/footer';
import { TextsOfThemes } from './subComponents/textsOfThemes';
import { Themes } from './subComponents/themes';

type sectionsModal = 'CRITERIA' | 'THEME' | 'TEXTSOFTHEME';

export function ModalNewEssay() {
  const [section, setSection] = useState<sectionsModal | string>('CRITERIA');
  const [theme, setTheme] = useState<IThemeData | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-4">
          <PiFilePlus size={28} />
          Nova redação
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll p-8 max-w-[70%] min-h-[45rem]">
        {section === 'CRITERIA' && <Criteria setSection={setSection} />}
        {section === 'THEME' && (
          <Themes setSection={setSection} setTheme={setTheme} />
        )}
        {section === 'TEXTSOFTHEME' && theme && (
          <TextsOfThemes setSection={setSection} theme={theme} />
        )}
        <FooterModal section={section} setSection={setSection} />
      </DialogContent>
    </Dialog>
  );
}
