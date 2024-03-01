import iconQuestion from '@/../public/icons/Icon.svg';
import iconPaper from '@/../public/icons/Icon2.svg';
import iconPen from '@/../public/icons/Icon4.svg';
import iconPlay from '@/../public/icons/icon3.svg';
import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { InfoCard } from './InfoCard';
export function Overview() {
  return (
    <Section>
      <div>
        <TitleSection>Olá, Guilherme Freitas!</TitleSection>
        <SubTitleSection>
          Essas são suas atividades na plataforma
        </SubTitleSection>
      </div>
      <div className="flex self-center gap-8">
        <InfoCard
          className="bg-opaque-red"
          numberStatistics="50"
          content="Questões"
          iconSrc={iconQuestion}
        />
        <InfoCard
          className="bg-opaque-yellow"
          numberStatistics="12"
          content="Redações"
          iconSrc={iconPaper}
        />
        <InfoCard
          className="bg-opaque-green"
          numberStatistics="5"
          content="Aulas"
          iconSrc={iconPlay}
        />
        <InfoCard
          className="bg-opaque-purple"
          numberStatistics="3"
          content="Simulados"
          iconSrc={iconPen}
        />
      </div>
    </Section>
  );
}
