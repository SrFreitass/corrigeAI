import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/commons/accordion';
import { IResultJSON } from '@/models/essay/resultEssayUser';

interface ScoreProps {
  result: IResultJSON;
}

export function Score({ result }: ScoreProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="font-semibold text-xl text-primary">Conclusão final</h2>
      <p className="text-secundary">
        {result?.['Pontos de Melhorias no Geral'].Observação}
      </p>
      <h2 className="text-secundary">
        Margem de erro de I.A {result?.['Margem de Erro de I.A']}
      </h2>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            Competência 1 - {result?.['Competência 1'].Pontuação}
          </AccordionTrigger>
          <AccordionContent>
            {result?.['Competência 1'].Observação}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Competência 2 - {result?.['Competência 2'].Pontuação}
          </AccordionTrigger>
          <AccordionContent>
            {result?.['Competência 2'].Observação}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Competência 3 - {result?.['Competência 3'].Pontuação}
          </AccordionTrigger>
          <AccordionContent>
            {result?.['Competência 3'].Observação}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Competência 4 - {result?.['Competência 4'].Pontuação}
          </AccordionTrigger>
          <AccordionContent>
            {result?.['Competência 4'].Observação}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            Competência 5 - {result?.['Competência 5'].Pontuação}
          </AccordionTrigger>
          <AccordionContent>
            {result?.['Competência 5'].Observação}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
