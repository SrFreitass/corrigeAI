import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

type Lecture = {
  id: string;
  title: string;
  description: string;
  teacher_id: string;
  course_id: string;
  createdAt: Date;
  Lessons: [
    {
      id: string;
      title: string;
      description: string;
      lecture_id: string;
      image_url: null;
      options: string[];
      createdAt: string;
      answer: number;
      answer_img_url: null;
      answer_text: null;
    },
  ];
  updateAt: Date | null;
};

type CoursePlanProps = {
  lectures: Lecture[];
};

export function CoursePlan({ lectures }: CoursePlanProps) {
  const [showModules, setShowModules] = useState(true);
  const router = useRouter();

  const handleLecture = (number: number) => {
    router.push(`?lecture=${number}`);
  };

  return (
    <div className="flex flex-col gap-8 max-h-[35rem] overflow-y-auto px-2">
      <div className="flex flex-col gap-8 border-l px-2">
        {lectures?.map((item, index) => {
          return (
            <div key={index}>
              <div
                className="flex items-start gap-4"
                onClick={() => setShowModules(!showModules)}
              >
                <span className="">
                  <FaRegDotCircle
                    className="relative right-4"
                    color="#151D48"
                  />
                </span>
                <h3 className="w-20 font-semibold text-primary dark:text-white">
                  Módulo
                </h3>
                {showModules ? (
                  <IoIosArrowUp color="#151D48" />
                ) : (
                  <IoIosArrowDown color="#151D48" />
                )}
              </div>
              {showModules && (
                <div className="animate-appear-from-below flex flex-col gap-4  mt-4 ml-8">
                  <h2
                    className="transition-all text-secundary hover:text-third dark:hover:text-zinc-300 "
                    onClick={() => handleLecture(index + 1)}
                  >
                    <Link href="#" className="font-medium">
                      Aula {index + 1} - {item.title}
                    </Link>
                  </h2>
                  {item.Lessons.map((lesson, index) => {
                    return (
                      <h2
                        className="transition-all text-secundary hover:text-third dark:hover:text-zinc-300"
                        key={index}
                      >
                        <Link
                          className="font-medium"
                          href={`./${item.course_id}/${lesson.id}`}
                        >
                          Quiz - {lesson.title}
                        </Link>
                      </h2>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
