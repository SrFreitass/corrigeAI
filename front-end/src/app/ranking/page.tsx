'use client'

import { EssayStatistics } from '@/components/EssayStatistics'
import { Header } from '@/components/Header'
import MenuAside from '@/components/MenuAside'
import { MinimalRanking } from '@/components/MinimalRanking'
import Overview from '@/components/Overview'
import { TopSubjects } from '@/components/TopSubjects'
import { Table, TableHead, TableHeader } from '@/components/ui/table'
import { IRankingUsers } from '@/models/user.interface'
import { TableBody, TableCell, TableRow } from '@mui/material'
import { useEffect, useState } from 'react'
import { getRankingUsers } from '../http/get.rankingUsers'

export default function RankingPage() {
  const [data, setData] = useState<
    | {
        name: string
        id: string
        points: number
      }[]
    | undefined
  >()

  const handlePagesRanking = async (page: number) => {}

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        const response = await getRankingUsers(1)
        setData(response.data)
      } catch {
        console.log('Unexpected Error')
      }
    }
    fetchRanking()
  }, [])

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
            <section className="p-8 bg-white dark:bg-dark rounded-bg">
              <h2 className="text-2xl dark:text-white font-semibold">
                Posições
              </h2>
              <Table>
                <TableHeader>
                  <TableHead>Posição</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Pontos</TableHead>
                </TableHeader>
                <TableBody>
                  {data?.map((user, index) => (
                    <TableRow key={user.id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.points}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
