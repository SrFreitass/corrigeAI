import { Button } from '@/components/ui/commons/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ReactNode, useState } from 'react';
import { HiOutlinePencilSquare } from 'react-icons/hi2';

type CardSubjectProps = {
  icon: ReactNode;
  subject: string;
  subjectId: string;
  description: string;
};

export function CardSubject({
  description,
  icon,
  subject,
  subjectId,
}: CardSubjectProps) {
  const [preparatoryName, setPreparatoryName] = useState('');

  return (
    <div className="bg-opaque-green rounded-bg flex flex-col gap-4 p-8">
      {icon}
      <h2 className="text-primary dark:text-white font-semibold text-xl">
        {subject}
      </h2>
      <p className="text-secundary">{description}</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="flex items-center gap-2"
            onClick={() => setPreparatoryName(subject)}
          >
            <HiOutlinePencilSquare size={24} />
            Iniciar
          </Button>
        </DialogTrigger>
        <DialogContent className="p-8">
          <h2 className="text-xl font-semibold text-primary dark:text-white">
            Você tem certeza dessa ação?
          </h2>
          <h3>Iniciar o simulado de &#34;{preparatoryName}&#34;</h3>
          <div className="flex justify-center gap-8 mt-4">
            <Button className="w-24">Sim</Button>
            <Button className="w-24">Não</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
