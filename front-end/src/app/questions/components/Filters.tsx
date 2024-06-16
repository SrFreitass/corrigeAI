import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { Filter } from './Filter';

export function Filters() {
  return (
    <div className="mt-6">
      <SubTitleSection>Apenas questões que: </SubTitleSection>
      <section className="flex gap-4">
        <div className="flex gap-2">
          <Input type="radio" name="question" />
          <label>Todas</label>
        </div>
        <div className="flex gap-2">
          <Input type="radio" name="question" />
          <label>Já respondi</label>
        </div>
        <div className="flex gap-2">
          <Input type="radio" name="question" />
          <label>Acertei</label>
        </div>
        <div className="flex gap-2">
          <Input type="radio" name="question" />
          <label>Errei</label>
        </div>
      </section>
      <section className="flex gap-6 mt-4">
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
      </section>
      <Button className="mt-4">Buscar questões</Button>
    </div>
  );
}
