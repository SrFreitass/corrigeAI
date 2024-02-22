'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { getLecturesByCourse } from '@/http/get.lecturesByCourse';
import { ILecture } from '@/models/lectures/lectures.interface';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseDescription } from './components/CourseDescription';
import { CoursePlan } from './components/CoursePlan';
import { VideoCourse } from './components/VideoCourse';

export default function CoursePage() {
  const { course } = useParams() as { course: string };
  const queryParams = useSearchParams();
  const [lectureIndex, setLectureIndex] = useState<number>(0);
  const [lectures, setLectures] = useState<ILecture | null>(null);

  useEffect(() => {
    const lectureParams = Number(queryParams.get('lecture'));

    if (lectureParams) {
      setLectureIndex(lectureParams - 1);
    }
  }, [queryParams]);

  useEffect(() => {
    const FetchData = async () => {
      console.log(course);
      const lectures = await getLecturesByCourse(course);
      console.log(lectures);
      setLectures(lectures);
    };
    FetchData();
  }, [course]);

  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header />
        <div className="flex flex-col gap-8 px-10">
          <section>
            <h2 className="text-xl text-primary dark:text-white font-semibold">
              {lectures?.data[lectureIndex]?.title}
            </h2>
          </section>
          {lectures ? (
            <>
              <section className="w-full flex gap-8">
                <VideoCourse src={lectures?.data[lectureIndex]?.video_url} />
                <CoursePlan lectures={lectures.data} />
              </section>
              <section className="w-[70%] flex flex-col gap-2">
                <CourseDescription
                  description={lectures?.data[lectureIndex]?.description}
                />
              </section>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
