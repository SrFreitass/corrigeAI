import { Input } from '@/components/ui/commons/input';
import { Section } from '@/components/ui/commons/section';
import { TitleSection } from '@/components/ui/commons/titleSection';

export function FilterOverview() {
  return (
    <Section className="flex flex-col gap-4">
      <TitleSection className="text-xl">Filtros aplicados</TitleSection>
      <form className="flex flex-col gap-4">
        <Input
          type="text"
          value={'ENEM'}
          disabled={true}
          className="text-secundary"
        />
        <Input
          type="text"
          value={'Ciências da Natureza'}
          disabled={true}
          className="text-secundary"
        />
        <Input
          type="text"
          value={'Física'}
          disabled={true}
          className="text-secundary"
        />
        <Input
          type="text"
          value={'2023, 2022'}
          disabled={true}
          className="text-secundary"
        />
        <Input
          type="text"
          value={'Fácil, Médio'}
          disabled={true}
          className="text-secundary"
        />
      </form>
    </Section>
  );
}
