'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { CoursePlan } from '../components/CoursePlan';
import { Quiz } from './components/Quiz';

export default function LessonPage() {
  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header />
        <div className="flex flex-col gap-8 px-10">
          <section>
            <h2 className="text-xl text-primary dark:text-white font-semibold"></h2>
          </section>
          <section className="flex">
            <Quiz />
            <CoursePlan />
          </section>
        </div>
      </main>
    </div>
  );
}
