import { Button } from '@/components/ui/commons/button';
import { DialogHeader } from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FocusEvent, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

type sectionsModal = 'CRITERIA' | 'THEME' | 'TEXTSTHEME';

type CriteriaProps = {
  setSection: (item: sectionsModal) => void;
};

export function Criteria({ setSection }: CriteriaProps) {
  const [criteria, setCriteria] = useState<'ENEM'>('ENEM');

  const observerSelect = (e: FocusEvent<HTMLButtonElement>) => {};

  const handleSections = () => {};

  return (
    <div className="flex flex-col gap-4">
      <DialogHeader>
        <h2 className="text-primary dark:text-white font-semibold text-xl">
          Como devemos avaliar sua redação? 📝
        </h2>
      </DialogHeader>
      <Select>
        <SelectTrigger
          className="w-full dark:text-white"
          onFocus={observerSelect}
          defaultValue={'ENEM'}
        >
          <SelectValue
            placeholder="Critérios baseados em... (ENEM)"
            className="text-secundary"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ENEM" className="text-secundary">
            ENEM
          </SelectItem>
        </SelectContent>
      </Select>
      {criteria === 'ENEM' && (
        <>
          <p className="text-secundary">
            Tenha sua redação avaliada segundo os critérios de correção do Enem
            (Exame Nacional do Ensino Médio), o maior exame vestibular do
            Brasil. A nota da redação, variando entre 0 (zero) e 1000 (mil)
            pontos, é atribuída com base em 5 competências (200 pontos por
            competência):
          </p>
          <h2 className="text-primary dark:text-white font-semibold text-xl">
            Competências
          </h2>
          <p className="text-secundary">
            <span className="text-xl text-primary dark:text-third font-semibold">
              C1
            </span>{' '}
            {' - '}
            Domínio da escrita formal da língua portuguesa.
          </p>
          <hr />
          <p className="text-secundary">
            <span className="text-xl text-primary dark:text-third font-semibold">
              C2
            </span>{' '}
            {' - '}
            Compreender o tema e não fugir do que é proposto.
          </p>
          <hr />
          <p className="text-secundary">
            <span className="text-xl text-primary dark:text-third font-semibold">
              C3
            </span>{' '}
            {' - '}
            Selecionar, relacionar, organizar e interpretar informações, fatos,
            opiniões e argumentos em defesa de um ponto de vista.
          </p>
          <hr />
          <p className="text-secundary">
            <span className="text-xl text-primary dark:text-third font-semibold">
              C4
            </span>{' '}
            {' - '}
            Conhecimento dos mecanismos linguísticos necessários para a
            construção da argumentação.
          </p>
          <hr />
          <p className="text-secundary">
            <span className="text-xl text-primary dark:text-third font-semibold">
              C5
            </span>{' '}
            {' - '}
            Proposta de intervenção e respeito aos direitos humanos.
          </p>
          <Button
            className="flex items-center self-end gap-6 absolute bottom-20"
            onClick={() => setSection('THEME')}
          >
            Avançar <FaArrowRight />
          </Button>
        </>
      )}
    </div>
  );
}
