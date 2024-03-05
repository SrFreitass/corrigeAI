'use client';

import { poppins } from '@/app/layout';
import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { getEssayUser } from '@/http/essay/get.essayUser';
import {
  IResultEssayUserData,
  IResultJSON,
} from '@/models/essay/resultEssayUser';
import { ApexOptions } from 'apexcharts';
import * as DOMPurify from 'dompurify';
import dynamic from 'next/dynamic';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TextsOfTheme } from '../../[criteria]/[theme]/components/TextsOfTheme';
import { MenuStatistics } from './components/MenuStatistics';
import { Score } from './components/Score';
import { SpellingErrors } from './components/SpellingErrors';

export default function EssayUser() {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
  const [essayUser, setEssayUser] = useState<IResultEssayUserData>(
    {} as IResultEssayUserData,
  );
  const [sectionStatistics, setSectionStatistics] = useState<
    'SCORE' | 'SPELLING' | 'TEXTS'
  >('SCORE');

  const { essayUserId } = useParams();
  const options: ApexOptions = {
    chart: {
      fontFamily: `${poppins.style.fontFamily}, sans-serif`,

      animations: {
        easing: 'easeinout',
      },
    },

    plotOptions: {
      radialBar: {
        barLabels: {},
        hollow: {
          size: '70%',
        },
        dataLabels: {
          name: {
            offsetY: -20,
          },
          value: {
            fontSize: '48px',
            fontWeight: 600,
            formatter: () => essayUser?.points.toString() || '',
          },
        },
      },
    },

    labels: ['Nota final'],
    series: [essayUser ? essayUser.points / 10 : 0],

    stroke: {
      curve: 'smooth',
      lineCap: 'round',
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

  useEffect(() => {
    const fetchEssayUser = async () => {
      const essay = await getEssayUser(essayUserId as string);
      setEssayUser(essay);
    };
    fetchEssayUser();
  }, []);

  const essayPurified = DOMPurify.sanitize(
    essayUser?.essay ? essayUser?.essay.replace(/\\n/g, '<br/>') : '',
  );

  let resultJSON: undefined | IResultJSON;
  let spellingErrorsProp:
    | undefined
    | {
        'Erros de Português': number;
        'Erros Graves': [
          {
            'Regra quebrada': string;
            Frase: string;
            'Sugestão de correção': string;
          },
        ];
        'Erros Médios': [
          {
            'Regra quebrada': string;
            Frase: string;
            'Sugestão de correção': string;
          },
        ];
        'Erros Leves': [
          {
            'Regra quebrada': string;
            Frase: string;
            'Sugestão de correção': string;
          },
        ];
      };

  if (essayUser.result) {
    resultJSON = JSON.parse(`${essayUser?.result}`);
    if (!resultJSON) return;

    spellingErrorsProp = {
      'Erros de Português': resultJSON['Erros de Português'],
      'Erros Graves': resultJSON['Erros Graves'],
      'Erros Médios': resultJSON['Erros Médios'],
      'Erros Leves': resultJSON['Erros Leves'],
    };
  }

  console.log(resultJSON);
  console.log(essayUser);

  return (
    <main className="flex">
      <MenuAside />
      <div className="w-full">
        <Header />
        <div className="flex gap-8 mx-10">
          <div className="w-1/2 flex flex-col gap-4">
            <section className="max-h-[85vh] overflow-y-scroll flex flex-col gap-4">
              <h2 className="font-semibold text-xl text-primary">
                {essayUser.title ? essayUser.title : 'Redação sem título'}
              </h2>
              <p
                className="text-lg leading-10"
                dangerouslySetInnerHTML={{ __html: essayPurified }}
              />
            </section>
          </div>
          {essayUser?.result ? (
            <section className="max-h-[85vh] min-w-1/2 w-1/2 overflow-y-auto flex flex-col items-center">
              <MenuStatistics setSectionStatistics={setSectionStatistics} />
              {resultJSON && sectionStatistics === 'SCORE' ? (
                <>
                  <Chart
                    options={essayUser ? options : {}}
                    series={options.series}
                    type="radialBar"
                    width={300}
                    height={300}
                  />
                  <Score result={resultJSON} />
                </>
              ) : null}
              {spellingErrorsProp && sectionStatistics === 'SPELLING' ? (
                <SpellingErrors spellingErrors={spellingErrorsProp} />
              ) : null}
              {essayUser.Essays && sectionStatistics === 'TEXTS' ? (
                <TextsOfTheme
                  essayTheme={essayUser.Essays}
                  className="!min-w-full !px-0 mt-8"
                />
              ) : null}
            </section>
          ) : null}
        </div>
      </div>
    </main>
  );
}
