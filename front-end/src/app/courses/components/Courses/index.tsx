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
          return (
            <CourseCard
              courseId={item.id}
              key={item.id}
              title={item.title}
              description={item.description}
              subject={item.schoolSubject.name}
              tags={[
                item.schoolSubject.name,
                item.schoolSubject.enemsubjects.name,
              ]}
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
