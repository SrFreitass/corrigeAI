import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { useRouter } from 'next/navigation';
import { GiMaterialsScience } from 'react-icons/gi';
import { TbMathFunction } from 'react-icons/tb';

type subjectsType = 'Matemática' | 'Física';

type CourseCardProps = {
  courseId: string;
  title: string;
  description: string;
  tags: string[];
  subject: string;
  skeleton?: boolean;
};

const subjectIcon = {
  Matemática: <TbMathFunction size={24} color="white" />,
  Física: <GiMaterialsScience size={24} color="white" />,
};

export function CourseCard({
  skeleton,
  courseId,
  tags,
  subject,
  title,
  description,
}: CourseCardProps) {
  const router = useRouter();
  if (skeleton) {
    return (
      <div className="animate-skeleton  bg-zinc-200  w-[32rem] p-8 flex flex-col items-start gap-4 rounded-bg">
        <div className="p-8 bg-slate-300 rounded-full"></div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-third min-w-96 min-h-4 bg-slate-300 rounded-md"></h3>
          <SubTitleSection className="max-h-72 min-h-4 bg-slate-300 rounded-md">
            {' '}
          </SubTitleSection>
        </div>
        <div className="flex gap-4">
          <p className="w-32 min-h-4 bg-slate-300 rounded-md"></p>
          <p className="w-32 min-h-4 bg-slate-300 rounded-md"></p>
        </div>
      </div>
    );
  }
  return (
    <div
      className="transition-all cursor-pointer w-[32rem] p-8 flex flex-col items-start gap-4 rounded-bg border-third hover:border-2 hover:scale-105"
      onClick={() => router.push(`./courses/${courseId}`)}
    >
      <div className="p-2 bg-third rounded-full">
        {subjectIcon[subject as subjectsType] &&
          subjectIcon[subject as subjectsType]}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-third">{title}</h3>
        <SubTitleSection>{description}</SubTitleSection>
      </div>
      <div className="flex gap-4">
        {tags.map((tag, index) => {
          return (
            <p
              className="text-ellipsis px-4 py-1 max-h-8  bg-third rounded-lg text-white"
              key={index}
            >
              {[...tag].map((letter, index) => {
                return index >= 25 ? '.' : letter;
              })}
            </p>
          );
        })}
      </div>
    </div>
  );
}
