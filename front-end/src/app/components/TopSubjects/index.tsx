import { Section } from '@/components/ui/commons/section';
import { SubTitleSection } from '@/components/ui/commons/subTitleSection';
import { TitleSection } from '@/components/ui/commons/titleSection';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function TopSubjects() {
  return (
    <Section>
      <div>
        <TitleSection>Disciplinas</TitleSection>
        <SubTitleSection>
          % de acertos das disciplinas - Em ordem
        </SubTitleSection>
      </div>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Desempenho</TableHead>
            <TableHead>%</TableHead>
            <TableBody></TableBody>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell className="font-medium">Ciências da Natureza</TableCell>
            <TableCell>
              <Progress
                value={20}
                max={100}
                bgPrimary="bg-[#0095FF]"
                bgSecundary="bg-[#CDE7FF]"
              />
            </TableCell>
            <TableCell>
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF] dark:text-primary">
                50%
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2</TableCell>
            <TableCell className="font-medium">Ciências Humanas</TableCell>
            <TableCell>
              <Progress
                value={20}
                max={100}
                bgPrimary="bg-[#0095FF]"
                bgSecundary="bg-[#CDE7FF]"
              />
            </TableCell>
            <TableCell>
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF] dark:text-primary">
                50%
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3</TableCell>
            <TableCell className="font-medium">
              Linguagens, Códigos e suas Tecnologias
            </TableCell>
            <TableCell>
              <Progress
                value={20}
                max={100}
                bgPrimary="bg-[#0095FF]"
                bgSecundary="bg-[#CDE7FF]"
              />
            </TableCell>
            <TableCell>
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF] dark:text-primary">
                50%
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>4</TableCell>
            <TableCell className="font-medium">
              Matemática e suas tecnologias
            </TableCell>
            <TableCell>
              <Progress
                value={20}
                max={100}
                bgPrimary="bg-[#0095FF]"
                bgSecundary="bg-[#CDE7FF]"
              />
            </TableCell>
            <TableCell>
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF] dark:text-primary">
                50%
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>5</TableCell>
            <TableCell className="font-medium">Redação</TableCell>
            <TableCell>
              <Progress
                value={20}
                max={100}
                bgPrimary="bg-[#0095FF]"
                bgSecundary="bg-[#CDE7FF]"
              />
            </TableCell>
            <TableCell>
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF] dark:text-primary">
                50%
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Section>
  );
}
