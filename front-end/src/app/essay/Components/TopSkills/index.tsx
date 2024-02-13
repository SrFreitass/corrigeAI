/* eslint-disable prettier/prettier */
import { Section } from '@/components/ui/commons/section';
import { TitleSection } from '@/components/ui/commons/titleSection';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Progress } from '@/components/ui/progress';
import { useState } from 'react';

export function TopSkills() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<
    | {
        skill: string;
        percentage: number;
      }[]
    | undefined
  >();

  return (
    <Section>
      <TitleSection>Disciplinas</TitleSection>
      <Table>
        <TableHeader>
          <TableHead className="px-0">#</TableHead>
          <TableHead className="px-0">Nome</TableHead>
          <TableHead className="px-0">Desempenho</TableHead>
          <TableHead className="px-0">%</TableHead>
        </TableHeader>
        <TableBody>
          {data?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{item.skill}</TableCell>
              <TableCell>{item.percentage}%</TableCell>
              <TableCell>
                <Progress
                  value={Number(item.percentage)}
                  max={100}
                  bgPrimary=""
                  bgSecundary=""
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}
