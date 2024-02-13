'use client';

import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Competência 1', value: 200, color: '#1A932E' },
  { label: 'Competência 2', value: 200, color: '#E5AE21' },
  { label: 'Competência 3', value: 200, color: '#0BB783' },
  { label: 'Competência 4', value: 200, color: '#BF83FF' },
  { label: 'Competência 5', value: 200, color: '#247CFF' },
];

export function EssayStatistics() {
  return (
    <Section>
      <div>
        <TitleSection>Estatísticas das redaçãoes</TitleSection>
        <SubTitleSection className="text-secundary">
          Média geral de suas redações
        </SubTitleSection>
      </div>
      <PieChart
        series={[
          {
            data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            innerRadius: 50,
            faded: {
              innerRadius: 50,
              additionalRadius: -10,
              color: 'gray',
            },
          },
        ]}
        height={200}
      />
    </Section>
  );
}
