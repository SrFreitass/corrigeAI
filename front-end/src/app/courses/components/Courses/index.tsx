import { getCourses } from '@/http/get.courses';
import { ICourse } from '@/models/course/course.interface';
import { useEffect, useState } from 'react';
import { CourseCard } from '../CourseCard';

export function Courses() {
  const [data, setData] = useState<ICourse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourses();
        setData(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="mt-8 flex gap-8 flex-wrap">
      {data ? (
        data.data.map((item, index) => {
          const { id, title, description, schoolSubject } = item;
          return (
            <CourseCard
              courseId={id}
              key={id}
              title={title}
              description={description}
              subject={schoolSubject.name}
              tags={[schoolSubject.name, schoolSubject.enemsubjects.name]}
            />
          );
        })
      ) : (
        <>
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <CourseCard
                courseId=""
                description=""
                subject=""
                tags={[]}
                title=""
                skeleton={true}
                key={item}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
