import { Section } from '@/components/ui/commons/section';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { Stack } from '@mui/material';
import { LineChart } from '@mui/x-charts/LineChart';

export function ChartEssays() {
  return (
    <Section>
      <TitleSection>Desempenho</TitleSection>
      <Stack className="cursor-crosshair">
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          width={1000}
          height={300}
        />
      </Stack>
    </Section>
  );
}
