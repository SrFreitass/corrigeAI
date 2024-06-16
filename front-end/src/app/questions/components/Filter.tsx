import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/commons/select';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { SelectGroup } from '@radix-ui/react-select';

interface FilterProps {
  type: string;
  placeHolder: string;
  options: string[];
}

export function Filter({ options, placeHolder, type }: FilterProps) {
  return (
    <div className="flex flex-col">
      <SubTitleSection>{type}</SubTitleSection>
      <Select>
        <SelectTrigger
          className="w-64"
          //   onFocus={(e: FocusEvent<HTMLButtonElement>) => handleSelect(0, e)}
        >
          <SelectValue placeholder="Seleciona algo" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{placeHolder}</SelectLabel>
            {options.map((option, index) => {
              return (
                <SelectItem value={option} key={index}>
                  {option}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
