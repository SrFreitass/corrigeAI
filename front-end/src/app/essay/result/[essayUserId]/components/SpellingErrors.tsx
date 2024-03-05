import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/commons/accordion';
import { AccordionItem } from '@radix-ui/react-accordion';

interface SpellingErrorsProps {
  spellingErrors: {
    'Erros de Português': number;
    'Erros Graves': [
      {
        'Regra quebrada': string;
        Frase: string;
        'Sugestão de correção': string;
      },
    ];
    'Erros Médios': [
      {
        'Regra quebrada': string;
        Frase: string;
        'Sugestão de correção': string;
      },
    ];
    'Erros Leves': [
      {
        'Regra quebrada': string;
        Frase: string;
        'Sugestão de correção': string;
      },
    ];
  };
}

export function SpellingErrors({ spellingErrors }: SpellingErrorsProps) {
  return (
    <Accordion
      type="multiple"
      className="w-full flex flex-col items-start mt-4"
    >
      {spellingErrors['Erros Graves'].map((error, index) => {
        return (
          <AccordionItem key={index} value={`1-${index}}`}>
            <AccordionTrigger>
              <div className="min-w-4 min-h-4 bg-red-400 rounded-full"></div>
              <h2 className="w-full text-start">{error['Regra quebrada']}</h2>
            </AccordionTrigger>
            <AccordionContent className="leading-9">
              {error.Frase} -&gt;{' '}
              <span className="p-1 rounded-md bg-third font-medium text-white">
                {error['Sugestão de correção']}
              </span>
            </AccordionContent>
          </AccordionItem>
        );
      })}
      {spellingErrors['Erros Médios'].map((error, index) => {
        return (
          <AccordionItem key={index} value={`2-${index}}`}>
            <AccordionTrigger>
              <div className="min-w-4 min-h-4 bg-orange-300 rounded-full"></div>
              <h2 className="w-full text-start">{error['Regra quebrada']}</h2>
            </AccordionTrigger>
            <AccordionContent className="leading-9">
              {error.Frase} -&gt;{' '}
              <span className="p-1 rounded-md bg-third font-medium text-white">
                {error['Sugestão de correção']}
              </span>
            </AccordionContent>
          </AccordionItem>
        );
      })}
      {spellingErrors['Erros Leves'].map((error, index) => {
        return (
          <AccordionItem key={index} value={`3-${index}}`}>
            <AccordionTrigger>
              <div className="min-w-4 min-h-4 bg-green-200 rounded-full"></div>
              <h2 className="w-full text-start">{error['Regra quebrada']}</h2>
            </AccordionTrigger>
            <AccordionContent className="leading-9">
              {error.Frase} -&gt;{' '}
              <span className="p-1 rounded-md bg-third font-medium text-white">
                {error['Sugestão de correção']}
              </span>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
