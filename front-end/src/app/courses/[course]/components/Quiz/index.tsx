import { Button } from '@/components/ui/commons/button';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { postAnswerQuiz } from '@/http/answers/post.answerQuiz';
import { IResponseLesson } from '@/models/lesson/responseLesson.interface';
import { useEffect, useState } from 'react';
import { LuClock } from 'react-icons/lu';
import { TfiMenuAlt } from 'react-icons/tfi';
import { ResultQuiz } from './Result';

type QuizProps = {
  attended: boolean;
  sizeListLectures: number;
  lectureId?: string;
  lessons?: [
    {
      answer: number;
      answer_img_url: string | null;
      answer_text: string | null;
      createdAt: string;
      description: string;
      id: string;
      image_url: null;
      options: string[];
      title: string;
    },
  ];
};

export function Quiz({
  lessons,
  lectureId,
  sizeListLectures,
  attended,
}: QuizProps) {
  const [session, setSession] = useState('START');
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState<number>(-1);
  const [result, setResult] = useState<IResponseLesson | null>(null);
  const [listAnswers, setListAnswers] = useState<number[]>([]);
  const { options, title } = (lessons && lessons[question]) || {
    options: [],
    title: '',
  };
  const minutes = lessons ? lessons.length * 1 : 1;

  const handleAnswer = (index: number) => {
    if (index === answer) {
      setAnswer(-1);
      return;
    }

    setAnswer(index);
  };

  console.log(answer);

  useEffect(() => {
    if (result) setSession('RESULT');
  }, [result]);

  useEffect(() => {
    const postAnswer = async () => {
      if (lessons && lectureId && listAnswers.length === lessons.length) {
        const res = await postAnswerQuiz({
          lectureId,
          answers: listAnswers,
        });
        setResult(res.data);
      }
    };
    postAnswer();
  }, [listAnswers]);

  useEffect(() => {
    setListAnswers([]);
  }, [session]);

  const handleSendAnswer = async (back: boolean) => {
    if (back && question - 1 < 0) return;

    if (back) {
      setQuestion(question - 1);
      return;
    }

    setListAnswers([...listAnswers, answer]);

    if (lessons && question < lessons.length - 1) {
      setQuestion(question + 1);
    }
  };

  if (session === 'START') {
    return (
      <>
        <div className="w-[70%] flex flex-col items-center gap-4">
          <TitleSection>📝</TitleSection>
          <TitleSection>Questionário</TitleSection>
          <SubTitleSection>
            Parabéns por chegar até aqui! Para fixar o conteúdo do módulo,
            preparamos um quiz para você. Bora lá?
          </SubTitleSection>
          <div className="flex gap-4">
            <SubTitleSection className="flex gap-2 items-center">
              <LuClock />
              {minutes}-{minutes * 2} Minutos
            </SubTitleSection>
            <SubTitleSection className="flex gap-2 items-center">
              <TfiMenuAlt />
              {lessons?.length || NaN} Questões
            </SubTitleSection>
          </div>
          <div className="flex gap-4">
            <Button className="w-32">Pular</Button>
            <Button className="w-32" onClick={() => setSession('STARTED')}>
              {attended ? 'Refazer' : 'Responder'}
            </Button>
          </div>
        </div>
      </>
    );
  }

  if (session === 'STARTED') {
    return (
      <div className="w-[70%] flex flex-col items-center justify-center">
        <div className="w-[90%] self-start">
          <>
            <TitleSection>
              Pergunta {question + 1}/{lessons?.length || 1}
            </TitleSection>
            <form className="flex flex-col gap-4">
              <SubTitleSection>{title}</SubTitleSection>
              {options.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="w-full rounded-md p-2 flex gap-2 items-center border border-transparent hover:border-third"
                    onClick={() => handleAnswer(index + 1)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${answer === index + 1 && 'bg-third'}`}
                    ></div>
                    <label className="">{option}</label>
                  </div>
                );
              })}
            </form>
            <div className="flex gap-4">
              <Button
                className="w-32 mt-8"
                onClick={() => handleSendAnswer(true)}
              >
                Voltar
              </Button>
              <Button
                className="w-32 mt-8"
                onClick={() => handleSendAnswer(false)}
              >
                Confirmar
              </Button>
            </div>
          </>
        </div>
      </div>
    );
  }

  if (session === 'RESULT') {
    const questionsProps = lessons?.map((lesson) => {
      return {
        title,
        options,
      };
    });

    if (!questionsProps) return;

    return (
      <ResultQuiz
        results={result}
        questions={questionsProps}
        sizeListLectures={sizeListLectures}
        setSession={setSession}
      />
    );
  }
}
