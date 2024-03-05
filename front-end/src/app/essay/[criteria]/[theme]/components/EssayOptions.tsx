import { Input } from '@/components/ui/commons/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/commons/select';
import { Dispatch, FocusEvent } from 'react';
import { ImFontSize } from 'react-icons/im';

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
    <div className="flex flex-wrap justify-start gap-8 relative bottom-4 border p-2 rounded-md">
      <div className="flex items-center gap-2 text-primary dark:text-white pr-4 border-r">
        <p>Textos motivadores</p>
        <Input type="checkbox" onChange={() => setTexts(!texts)} />
      </div>
      <div className="flex items-center gap-2 text-primary dark:text-white border-r pr-7">
        <p>Serifa</p>
        <Input type="checkbox" onChange={() => setSerif(!serif)} />
      </div>
      <div className="flex items-center gap-2 text-primary dark:text-white">
        <ImFontSize size={28} />
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
