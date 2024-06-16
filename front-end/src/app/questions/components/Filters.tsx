import { Button } from '@/components/ui/commons/button';
import { Filter } from './Filter';
import { FilterOverview } from './FilterOverview';

export function Filters() {
  return (
    <div className="pl-8 py-8 flex gap-8">
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
            placeHolder="Selecione uma disciplina"
            type="Disciplina"
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

          <Filter
            options={['Fácil', 'Médio', 'Difícil']}
            placeHolder="Selecione uma dificuldade"
            type="Dificuldades"
          />

          <Filter
            options={['Fácil', 'Médio', 'Difícil']}
            placeHolder="Selecione uma dificuldade"
            type="Dificuldades"
          />
        </div>
        <Button className="mt-4">Buscar questões</Button>
      </section>
      <FilterOverview />
    </div>
  );
}
