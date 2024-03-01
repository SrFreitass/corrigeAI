import { Section } from '@/components/ui/commons/section';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/commons/table';
import { TitleSection } from '@/components/ui/commons/titleSection';

import bronze from '@/../public/icons/Ranking/medal-bronze.svg';
import gold from '@/../public/icons/Ranking/medal-gold-winner.svg';
import silver from '@/../public/icons/Ranking/medal-silver.svg';

import { Input } from '@/components/ui/commons/input';
import { getRankingUsers } from '@/http/user/get.rankingUsers';
import { Button } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function ListUsers() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<
    | {
        name: string;
        id: string;
        points: number;
      }[]
    | undefined
  >();

  const fetchRanking = async () => {
    try {
      const response = await getRankingUsers(page);
      setData(response.data);
    } catch {
      console.log('Unexpected Error');
    }
  };

  const handlePagesRanking = (event: React.FocusEvent<HTMLInputElement>) => {
    if (isNaN(Number(event.target.value))) {
      event.target.value = '';
      return;
    }

    setPage(Number(event.target.value));
    event.target.value = '';
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  useEffect(() => {
    fetchRanking();
  }, [page]);

  return (
    <Section>
      <TitleSection>Posições</TitleSection>
      <Table>
        <TableHeader>
          <TableHead className="px-0">Posição</TableHead>
          <TableHead className="px-0">Nome</TableHead>
          <TableHead className="px-0">Pontos</TableHead>
        </TableHeader>
        <TableBody>
          {data?.map((user, index) => (
            <TableRow key={user.id} className=" dark:border-secundary">
              <TableCell className="dark:text-white flex font-medium px-0">
                {index + 1 === 1 && <Image src={gold} alt="Medalha de ouro" />}
                {index + 1 === 2 && (
                  <Image src={silver} alt="Medalha de prata" />
                )}
                {index + 1 === 3 && (
                  <Image src={bronze} alt="Medalha de bronze" />
                )}
                {index + 1}
              </TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-10 flex gap-4">
        {data?.length && data?.length > 10 ? (
          <>
            <Button className="px-5" onClick={() => setPage(page)}>
              {page}
            </Button>
            <Button className="px-5" onClick={() => setPage(page + 1)}>
              {page + 1}
            </Button>
            <Input
              type="text"
              placeholder="..."
              className="w-12 text-center font-semibold"
              onBlur={handlePagesRanking}
            />
            <Button className="px-5" onClick={() => setPage(page + 2)}>
              {page + 2}
            </Button>
            <Button className="px-5" onClick={() => setPage(page + 3)}>
              {page + 3}
            </Button>
          </>
        ) : null}
      </div>
    </Section>
  );
}
