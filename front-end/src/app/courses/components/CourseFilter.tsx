import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/commons/select';
import { getCoursesBySubject } from '@/http/courses/get.coursesBySubject';
import { ICourse } from '@/models/course/course.interface';
import { Dispatch, FocusEvent, SetStateAction } from 'react';
import subjects from './subjects.json';

interface CourseFilterProps {
  setCourses: Dispatch<SetStateAction<ICourse | null>>;
}

enum EtypeSubject {
  'ENEM' = 0,
  'SCHOOL' = 1,
}

export function CourseFilter({ setCourses }: CourseFilterProps) {
  const handleSelect = async (typeSubject: EtypeSubject, e: FocusEvent) => {
    const subject = e.target
      .querySelector('span')
      ?.textContent?.trim() as keyof (typeof subjects)[0];
    const subjectId = subjects[typeSubject][subject];

    if (!subject || !subjectId) return;

    const coursesFiltered = await getCoursesBySubject({
      typeSubject: typeSubject === 0 ? 'ENEM' : 'SCHOOL',
      subjectId,
    });

    setCourses(coursesFiltered);
  };

  return (
    <div className="flex gap-4">
      {' '}
      <div className="flex flex-col gap-2">
        <h2 className="text-secundary">Áreas de conhecimento</h2>
        <Select>
          <SelectTrigger
            className="w-52"
            onFocus={(e: FocusEvent<HTMLButtonElement>) => handleSelect(0, e)}
          >
            <SelectValue placeholder="Selecione a área de conhecimento" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecione uma disciplina</SelectLabel>
              <SelectItem value="1">Ciências Humanas</SelectItem>
              <SelectItem value="2">Ciências da Natureza</SelectItem>
              <SelectItem value="3">Matemática</SelectItem>
              <SelectItem value="4">Linguagens</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-secundary">Disciplinas</h2>
        <Select>
          <SelectTrigger
            className="w-52"
            onFocus={(e: FocusEvent<HTMLButtonElement>) => handleSelect(1, e)}
          >
            <SelectValue placeholder="Selecione a disciplina" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Selecione uma disciplina</SelectLabel>
              <SelectItem value="1">Literatura</SelectItem>
              <SelectItem value="2">Língua Portuguesa</SelectItem>
              <SelectItem value="3">Artes</SelectItem>
              <SelectItem value="4">História </SelectItem>
              <SelectItem value="5">Geografia </SelectItem>
              <SelectItem value="6">Filosofia </SelectItem>
              <SelectItem value="7">Sociologia </SelectItem>
              <SelectItem value="8">Matemática </SelectItem>
              <SelectItem value="9">Biologia </SelectItem>
              <SelectItem value="10">Química </SelectItem>
              <SelectItem value="11">Física </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
