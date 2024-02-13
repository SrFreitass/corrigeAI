import { Button } from '@/components/ui/commons/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import { PiFilePlus } from 'react-icons/pi';
import { Criteria } from './Criteria';
import { FooterModal } from './Footer';
import { TextsThemes } from './TextsThemes';
import { Themes } from './Themes';

type sectionsModal = 'CRITERIA' | 'THEME' | 'TEXTSOFTHEME';

export function ModalNewEssay() {
  const [section, setSection] = useState<sectionsModal | string>('CRITERIA');
  const [entranceExams, setEntranceExams] = useState('');
  const [theme, setTheme] = useState('');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-4">
          <PiFilePlus size={28} />
          Nova redação
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-y-scroll p-8 max-w-[70%] max-h-[45rem] min-h-[45rem]">
        {section === 'CRITERIA' && <Criteria setSection={setSection} />}
        {section === 'THEME' && <Themes setSection={setSection} />}
        {section === 'TEXTSOFTHEME' && <TextsThemes setSection={setSection} />}
        <FooterModal section={section} setSection={setSection} />
      </DialogContent>
    </Dialog>
  );
}
