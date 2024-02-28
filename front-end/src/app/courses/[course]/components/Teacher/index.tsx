import { SubTitleSection } from '@/components/ui/commons/subTitleSection';

type TeacherProps = {
  name?: string;
};

export function Teacher({ name }: TeacherProps) {
  return (
    <div>
      <h2 className="font-medium text-lg text-primary dark:text-white">
        {name}
      </h2>
      <SubTitleSection>Atividade elaborada pelo educador</SubTitleSection>
    </div>
  );
}
