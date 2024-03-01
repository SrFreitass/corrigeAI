import { getCourses } from '@/http/courses/get.courses';
import { ICourse } from '@/models/course/course.interface';
import { useEffect, useState } from 'react';
import { CourseCard } from '../CourseCard';
import { CourseFilter } from '../CourseFilter';

export function Courses() {
  const [courses, setCourses] = useState<ICourse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCourses();
        setCourses(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-8 flex-wrap">
      <CourseFilter setCourses={setCourses} />
      <div className="flex flex-wrap gap-8">
        {courses ? (
          courses.data.map((item, index) => {
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
    </div>
  );
}
