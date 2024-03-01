import { Section } from '@/components/ui/commons/section';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';

export function ChartEssays() {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const options: ApexOptions = {
    chart: {
      fontFamily: 'Arial, sans-serif',
      animations: {
        easing: 'easeinout',
      },
    },
    series: [
      {
        name: 'Nota da redação',
        data: [23, 34, 12, 54, 32, 43],
      },
    ],
    stroke: {
      curve: 'smooth',
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <Section>
      <TitleSection>Desempenho</TitleSection>
      <Chart
        options={options}
        series={options.series}
        type="area"
        width={1100}
        height={300}
      />
    </Section>
  );
}
