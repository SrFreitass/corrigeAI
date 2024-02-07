import { Progress } from '../ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

export function TopSubjects() {
  return (
    <div className=" max-h-[400px] flex flex-col gap-8 bg-white p-8 shadow-md rounded-bg dark:bg-dark">
      <div>
        <h2 className="text-primary dark:text-white text-2xl font-semibold">
          Disciplinas
        </h2>
        <h3 className="text-secundary">
          % de acertos das disciplinas - Em ordem
        </h3>
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
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF]">
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
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF]">
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
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF]">
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
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF]">
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
              <div className="text-center  rounded-lg border border-[#0095FF] bg-[#CDE7FF]">
                50%
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
