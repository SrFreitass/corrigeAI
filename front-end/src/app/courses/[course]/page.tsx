'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import { Input } from '@/components/ui/commons/input';
import { postHistoryLectureUser } from '@/http/history/post.HistoryLectureUser';
import { getLecturesByCourse } from '@/http/lecture/get.lecturesByCourse';
import { ILecture } from '@/models/lectures/lectures.interface';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CourseDescription } from './components/CourseDescription';
import { CoursePlan } from './components/CoursePlan';
import { Quiz } from './components/Quiz';
import { Teacher } from './components/Teacher';
import { VideoCourse } from './components/VideoCourse';

export default function CoursePage() {
  const { course } = useParams() as { course: string };
  const queryParams = useSearchParams();
  const [lectureIndex, setLectureIndex] = useState<number>(0);
  const [lectures, setLectures] = useState<ILecture | null>(null);
  const [watched, setWatched] = useState<boolean>(false);
  const quizParams = Boolean(queryParams.get('quiz'));
  const router = useRouter();
  const currentLecture = lectures?.data[lectureIndex];

  const handleWatched = async () => {
    if (watched) {
      return;
    }

    setWatched(true);
    await postHistoryLectureUser(currentLecture?.id || '');
  };

  useEffect(() => {
    lectures?.data.forEach((lecture, index) => {
      if (lecture.UsersLectureHistory[0].id) {
        router.push(`?lecture=${index + 1}`);
      }
    });
  }, [lectures]);

  useEffect(() => {
    const lectureParams = Number(queryParams.get('lecture'));

    setLectureIndex(lectureParams);

    if (lectures?.data[lectureParams]?.UsersLectureHistory[0]) {
      setWatched(true);
    }

    if (lectureParams !== 0) {
      setLectureIndex(lectureParams - 1);
    }
  }, [queryParams]);

  useEffect(() => {
    const FetchData = async () => {
      console.log(course);
      const lectures = await getLecturesByCourse(course);
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
              {quizParams ? 'Quiz' : currentLecture?.title}
            </h2>
          </section>
          {lectures ? (
            <>
              <section className="w-full flex gap-8">
                {quizParams ? (
                  <Quiz
                    lessons={currentLecture?.Lessons}
                    lectureId={currentLecture?.id}
                    sizeListLectures={lectures.data.length}
                    attended={!!currentLecture?.Answers[0].id}
                  />
                ) : (
                  <VideoCourse src={currentLecture?.video_url} />
                )}
                <CoursePlan
                  lectures={lectures.data}
                  lectureIndex={lectureIndex}
                />
              </section>
              <section className="w-[70%] flex flex-col gap-2">
                {quizParams ? null : (
                  <>
                    {lectures.data[lectureIndex]?.UsersLectureHistory[0]
                      .id ? null : (
                      <div className="text-end">
                        <Input
                          type="checkbox"
                          onClick={handleWatched}
                          checked={watched}
                        />
                        <label className="ml-4 text-secundary">
                          Marcar como assistido?
                        </label>
                      </div>
                    )}
                    <Teacher name={currentLecture?.Teacher.name} />
                    <CourseDescription
                      description={currentLecture?.description}
                    />
                  </>
                )}
              </section>
            </>
          ) : null}
        </div>
      </main>
    </div>
  );
}
