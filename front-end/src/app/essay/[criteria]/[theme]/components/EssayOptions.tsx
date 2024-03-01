import { Input } from '@/components/ui/commons/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/commons/select';
import { Dispatch, FocusEvent } from 'react';

interface essayOptionsProps {
  serif: boolean;
  texts: boolean;
  setFontSize: Dispatch<string>;
  setSerif: Dispatch<boolean>;
  setTexts: Dispatch<boolean>;
}

export function EssayOptions({
  serif,
  texts,
  setFontSize,
  setSerif,
  setTexts,
}: essayOptionsProps) {
  const observerSelect = (e: FocusEvent<HTMLButtonElement>) => {
    const size = e.target.querySelector('span')?.textContent;

    if (size === null) return;

    if (size === '16px') return setFontSize('text-base');

    if (size === '18px') return setFontSize('text-lg');

    if (size === '24px') return setFontSize('text-xl');
  };

  return (
    <div className="flex gap-6 relative">
      <div className="flex items-center gap-2 text-primary dark:text-white">
        <p>Aparecer textos motivadores?</p>{' '}
        <Input type="checkbox" onChange={() => setTexts(!texts)} />
      </div>
      <div className="flex items-center gap-2 text-primary dark:text-white">
        <p>Fonte serifada?</p>{' '}
        <Input type="checkbox" onChange={() => setSerif(!serif)} />
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
  );
}
