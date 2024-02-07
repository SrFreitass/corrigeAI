'use client'

import { MinimalRanking } from '@/components/MinimalRanking'
import MenuAside from '../components/MenuAside'
import Overview from '../components/Overview'
import { TopSubjects } from '@/components/TopSubjects'
import { EssayStatistics } from '@/components/EssayStatistics'
import { createTheme, ThemeProvider } from '@mui/material'
import { Header } from '@/components/Header'

const theme = createTheme({
  typography: {
    fontFamily: '__POPPINS_91BE14',
  },
})

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <div className="flex">
        <MenuAside />
        <div>
          <Header />
          <main className="grid grid-rows-2 grid-cols-layout gap-8 mx-10">
            <Overview />
            <MinimalRanking />
            <TopSubjects />
            <EssayStatistics />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}
