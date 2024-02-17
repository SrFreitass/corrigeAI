import { ReactNode } from 'react';

type CourseCardProps = {
  title: string;
  tags: string[];
  teacher: string;
  icon: ReactNode;
};

export function CourseCard({ icon, tags, teacher, title }: CourseCardProps) {
  return (
    <div className="p-8 flex flex-col items-start gap-4">
      <div className="p-2 bg-third rounded-full">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-third">{title}</h3>
        <p className="text-primary font-medium">Professor {teacher}</p>
      </div>
      <div className="flex gap-4">
        {tags.map((item, index) => (
          <p className="px-4 py2 bg-third rounded-lg text-white" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
