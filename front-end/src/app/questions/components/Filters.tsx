import { Button } from '@/components/ui/commons/button';
import { TbTrash } from 'react-icons/tb';
import { Filter } from './Filter';
import { FilterOverview } from './FilterOverview';

export function Filters() {
  const getQuestionWithFilters = () => {};

  return (
    <div className="pl-8 py-8 flex justify-between gap-8">
      {/*  <SubTitleSection>Apenas questões que: </SubTitleSection>
     <section className="flex gap-4">
        <div className="flex gap-1">
          <Input type="radio" name="question" />
          <label>Todas</label>
        </div>
        <div className="flex gap-1">
          <Input type="radio" name="question" />
          <label>Já respondi</label>
        </div>
        <div className="flex gap-1">
          <Input type="radio" name="question" />
          <label>Acertei</label>
        </div>
        <div className="flex gap-1">
          <Input type="radio" name="question" />
          <label>Errei</label>
        </div>
      </section> */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-6">
          <Filter
            options={['ENEM', 'UFMS', 'PASSE']}
            placeHolder="Selecione um concurso"
            type="Concurso"
          />

          <Filter
            options={[
              'Ciências Humanas',
              'Ciências da Natureza',
              'Matemática',
              'Linguagens',
            ]}
            placeHolder="Selecione uma área"
            type="Área"
          />

          <Filter
            options={['2022', '2023']}
            placeHolder="Selecione um ano"
            type="Ano"
          />

          <Filter
            options={['Fácil', 'Médio', 'Difícil']}
            placeHolder="Selecione uma dificuldade"
            type="Dificuldades"
          />
        </div>
        <div className="flex justify-center items-center gap-4 self-end">
          <button className="flex gap-2 items-center justify-center">
            <p className="font-medium text-primary">Limpar filtro</p>
            <TbTrash className="text-primary" size={18} />
          </button>
          <Button className="max-w-44" onClick={}>
            Buscar questões
          </Button>
        </div>
      </section>
      <FilterOverview />
    </div>
  );
}
