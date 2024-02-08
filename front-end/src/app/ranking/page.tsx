'use client';

import { Header } from '@/components/Header';
import MenuAside from '@/components/MenuAside';
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { FocusEvent, FormEvent, useEffect, useState } from 'react';
import { getRankingUsers } from '../http/get.rankingUsers';
import gold from '@/../public/icons/Ranking/medal-gold-winner.svg';
import silver from '@/../public/icons/Ranking/medal-silver.svg';
import bronze from '@/../public/icons/Ranking/medal-bronze.svg';

import Image from 'next/image';
import { Button } from '@/ui/utils/button';
import { Input } from '@/ui/utils/input';

export default function RankingPage() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<
    | {
        name: string;
        id: string;
        points: number;
      }[]
    | undefined
  >();

  const handlePagesRanking = async (e: FocusEvent<HTMLInputElement>) => {
    const page = Number(e.target?.value);

    if (page < 0 || isNaN(page)) return;

    e.target.value = '';
    setPage(page);
  };

  const fetchRanking = async () => {
    try {
      const response = await getRankingUsers(page);
      setData(response.data);
    } catch {
      console.log('Unexpected Error');
    }
  };

  useEffect(() => {
    fetchRanking();
  }, []);

  useEffect(() => {
    fetchRanking();
  }, [page]);

  return (
    <>
      <div className="flex">
        <MenuAside />
        <div className="w-full">
          <Header />
          <main className="flex flex-col gap-8 px-8">
            <div className="p-8 shadow-md bg-white dark:bg-dark rounded-bg">
              <h2 className="dark:text-white text-2xl font-semibold">
                Ranking
              </h2>
              <h3 className="text-secundary">
                Os estudantes que vêm dando o seu melhor na plataforma!
              </h3>
            </div>
            <section className="p-8 shadow-md bg-white dark:bg-dark rounded-bg">
              <h2 className="text-2xl dark:text-white font-semibold">
                Posições
              </h2>
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
                        {index + 1 === 1 && (
                          <Image src={gold} alt="Medalha de ouro" />
                        )}
                        {index + 1 === 2 && (
                          <Image src={silver} alt="Medalha de prata" />
                        )}
                        {index + 1 === 3 && (
                          <Image src={bronze} alt="Medalha de bronze" />
                        )}
                        {index + 1}
                      </TableCell>
                      <TableCell className="dark:text-white font-medium px-0">
                        {user.name}
                      </TableCell>
                      <TableCell className="dark:text-white font-medium px-0">
                        {user.points}
                      </TableCell>
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
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
