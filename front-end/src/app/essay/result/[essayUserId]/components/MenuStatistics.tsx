import { Dispatch } from 'react';
import { FaRegStar } from 'react-icons/fa';
import { FaPenToSquare } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';

interface MenuStatisticsProps {
  setSectionStatistics: Dispatch<'SCORE' | 'SPELLING' | 'TEXTS'>;
}

export function MenuStatistics({ setSectionStatistics }: MenuStatisticsProps) {
  const handleSection = (section: 'SCORE' | 'SPELLING' | 'TEXTS') => {
    setSectionStatistics(section);
  };

  return (
    <div className="w-full flex justify-start gap-8">
      <div
        className="flex items-center gap-4 text-secundary cursor-pointer"
        onClick={() => handleSection('SCORE')}
      >
        <FaRegStar />
        <p>Nota final</p>
      </div>
      <div
        className="flex items-center gap-4 text-secundary cursor-pointer"
        onClick={() => handleSection('SPELLING')}
      >
        <FaPenToSquare />
        <p>Erros ortográficos</p>
      </div>
      <div
        className="flex items-center gap-4 text-secundary cursor-pointer"
        onClick={() => handleSection('TEXTS')}
      >
        <IoDocumentText />
        <p>Textos motivadores</p>
      </div>
    </div>
  );
}
