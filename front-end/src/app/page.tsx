'use client';

import { EssayStatistics } from '@/app/components/EssayStatistics';
import { MinimalRanking } from '@/app/components/MinimalRanking';
import { TopSubjects } from '@/app/components/TopSubjects';
import { createTheme, ThemeProvider } from '@mui/material';
import { Header } from '../components/Header';
import { MenuAside } from '../components/MenuAside';
import { Overview } from './components/Overview';

const theme = createTheme({
  typography: {
    fontFamily: '__POPPINS_91BE14',
  },
});

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
  );
}
