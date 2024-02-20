import { Button } from '@/components/ui/commons/button';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { useState } from 'react';
import { LuClock } from 'react-icons/lu';
import { TfiMenuAlt } from 'react-icons/tfi';

export function Quiz() {
  const [start, setStart] = useState(false);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState<1 | 2 | 3 | 4 | 5 | null>(null);

  const handleAnswer = (index: 1 | 2 | 3 | 4 | 5) => {
    if (index === answer) {
      setAnswer(null);
      return;
    }

    setAnswer(index);
  };

  return (
    <div className="w-[70%] flex flex-col items-center justify-center">
      {start ? (
        [1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div key={index} className="w-[90%] self-start">
              {question === index && (
                <>
                  <TitleSection>Pergunta {index + 1}/5</TitleSection>
                  <form className="flex flex-col gap-4">
                    <SubTitleSection>
                      Descubra a icognita dessa determinada equação: 2+x=4
                    </SubTitleSection>
                    <div
                      className="w-full rounded-md p-2 flex gap-2 items-center border-third hover:border"
                      onClick={() => handleAnswer(1)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${answer === 1 && 'bg-third'}`}
                      ></div>
                      <label className="">1</label>
                    </div>
                    <div
                      className="w-full rounded-md p-2 flex gap-2 items-center border-third hover:border"
                      onClick={() => handleAnswer(2)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${answer === 2 && 'bg-third'}`}
                      ></div>
                      <label className="">2</label>
                    </div>
                    <div
                      className="w-full rounded-md p-2 flex gap-2 items-center border-third hover:border"
                      onClick={() => handleAnswer(3)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${answer === 3 && 'bg-third'}`}
                      ></div>
                      <label className="">3</label>
                    </div>
                    <div
                      className="w-full rounded-md p-2 flex gap-2 items-center border-third hover:border"
                      onClick={() => handleAnswer(4)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${answer === 4 && 'bg-third'}`}
                      ></div>
                      <label className="">4</label>
                    </div>
                    <div
                      className="w-full rounded-md p-2 flex gap-2 items-center border-third hover:border"
                      onClick={() => handleAnswer(5)}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${answer === 5 && 'bg-third'}`}
                      ></div>
                      <label className="">5</label>
                    </div>
                  </form>
                  <Button
                    className="w-32 mt-8"
                    onClick={() => setQuestion(question + 1)}
                  >
                    Confirmar
                  </Button>
                </>
              )}
            </div>
          );
        })
      ) : (
        <>
          <TitleSection>📝</TitleSection>
          <TitleSection>Questionário</TitleSection>
          <SubTitleSection>
            Parabéns por chegar até aqui! Para fixar o conteúdo do módulo,
            preparamos um quiz para você. Bora lá?
          </SubTitleSection>
          <div className="flex gap-4">
            <SubTitleSection className="flex gap-2 items-center">
              <LuClock />
              3-5 Minutos
            </SubTitleSection>
            <SubTitleSection className="flex gap-2 items-center">
              <TfiMenuAlt />5 Questões
            </SubTitleSection>
          </div>
          <div className="flex gap-4">
            <Button className="w-32">Pular</Button>
            <Button className="w-32" onClick={() => setStart(!start)}>
              Responder
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
