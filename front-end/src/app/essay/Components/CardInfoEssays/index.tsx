import iconPaper from '@/../public/icons/Icon2.svg';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import Image from 'next/image';

type CardsInfoEssaysProps = {
  content: string;
  statistics: string;
};

export function CardsInfoEssays({ content, statistics }: CardsInfoEssaysProps) {
  return (
    <div className="bg-opaque-yellow flex items-center gap-3 p-5 rounded-2xl dark:bg-dark">
      <Image src={iconPaper} alt="Icon" />
      <TitleSection className="dark:text-primary">{statistics}</TitleSection>
      <SubTitleSection>{content}</SubTitleSection>
    </div>
  );
}
