import { Button } from '@/components/ui/commons/button';
import { IResponseLesson } from '@/models/lesson/responseLesson.interface';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

type ResultQuizProps = {
  sizeListLectures: number;
  results: IResponseLesson | null;
  questions: {
    title: string;
    options: string[];
  }[];
  setSession: (session: string) => void;
};

const quality = {
  '0.3': 'Acho que é bom dar uma revisada',
  '0.5': 'humm... acho que tem que melhorar um pouco.',
  '0.8': 'Parabéns, você foi ótimo',
  '1': 'Parabéns, você gabaritou! :)',
};

export function ResultQuiz({
  results,
  questions,
  sizeListLectures,
  setSession,
}: ResultQuizProps) {
  const [indexCurrentLecute, setIndexCurrentLecture] = useState(0);
  const corrects = results?.answers.filter((item) => {
    return item.correct;
  });
  const router = useRouter();
  const queryParams = useSearchParams();

  useEffect(() => {
    const currentLecture = Number(queryParams.get('lecture'));
    setIndexCurrentLecture(currentLecture);
  }, []);

  const handleNextLecture = () => {
    if (indexCurrentLecute) {
      router.push(`?lecture=${indexCurrentLecute + 1}`);
    }
  };

  const congratulations = () => {
    if (!corrects || !results) return;

    const score = corrects?.length / results?.answers.length;

    if (score >= 1) {
      return quality['1'];
    }

    if (score >= 0.8) {
      return quality['0.8'];
    }

    if (score >= 0.5) {
      return quality['0.5'];
    }

    return quality['0.3'];
  };

  return (
    <div className="w-[70%]">
      {}
      <h2 className="text-xl font-medium text-primary">{congratulations()}</h2>
      <h3 className="text-secundary">
        Toque para expandir e conferir as respostas. Lembre-se que você pode
        assistir aulas de novo e refazer o quiz para reforçar seus
        conhecimentos.
      </h3>
      <div>
        {results?.answers.map((answer, index) => {
          return (
            <>
              <details key={answer.lesson_id} className="mt-8">
                <summary className="list-none">
                  {answer.correct ? (
                    <div className="flex gap-2">
                      <p className="flex items-center gap-2 font-medium text-green-600">
                        <FaCheck /> Questão {index + 1}.
                      </p>
                      <p className="text-secundary">{questions[index].title}</p>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <p className="flex items-center gap-2 font-medium text-red-500">
                        <FaX />
                        Questão {index + 1}.
                      </p>
                      <p className="text-primary font-medium">
                        {questions[index].title}
                      </p>
                    </div>
                  )}
                </summary>
                <div className="text-primary py-2">
                  <p className="font-medium text-lg">Sua respota</p>
                  <p className="text-secundary">
                    {questions[index].options[answer.option - 1]}
                  </p>
                </div>
              </details>
              <hr />
            </>
          );
        })}
      </div>
      {sizeListLectures <= indexCurrentLecute ? (
        <Button className="mt-8 w-32" onClick={() => setSession('STARTED')}>
          Refazer
        </Button>
      ) : (
        <Button className="mt-8" onClick={handleNextLecture}>
          Próxima aula
        </Button>
      )}
    </div>
  );
}
