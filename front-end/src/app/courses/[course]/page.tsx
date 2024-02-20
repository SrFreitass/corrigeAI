'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { CourseDescription } from './components/CourseDescription';
import { CoursePlan } from './components/CoursePlan';
import { VideoCourse } from './components/VideoCourse';

export default function CoursePage() {
  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header />
        <div className="flex flex-col gap-8 px-10">
          <section>
            <h2 className="text-xl text-primary dark:text-white font-semibold">
              Matemática básica para o ENEM
            </h2>
          </section>
          <section className="w-full flex gap-8">
            <VideoCourse src="https://www.youtube.com/embed/8Ajna_oOQts?si=uDNBwcPlQA1gzPZE" />
            <CoursePlan />
          </section>
          <section className="w-[70%] flex flex-col gap-2">
            <CourseDescription />
          </section>
        </div>
      </main>
    </div>
  );
}
