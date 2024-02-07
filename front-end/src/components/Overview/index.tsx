import { Card } from './Card'
import iconQuestion from '@/../public/icons/Icon.svg'
import iconPaper from '@/../public/icons/Icon2.svg'
import iconPlay from '@/../public/icons/Icon3.svg'
import iconPen from '@/../public/icons/Icon4.svg'

export default function Overview() {
  return (
    <section className="p-8 pb-16 rounded-bg flex flex-col gap-8 bg-white dark:bg-dark shadow-md dark:backdrop-blur-3xl">
      <div className="">
        <h1 className="text-primary dark:text-white text-2xl font-semibold">
          Olá, Guilherme Freitas!
        </h1>
        <h2 className="text-secundary">
          Essas são suas atividades na plataforma
        </h2>
      </div>
      <div className="flex gap-8">
        <Card
          className="bg-opaque-red"
          numberStatistics="50"
          content="Questões"
          iconSrc={iconQuestion}
        />
        <Card
          className="bg-opaque-yellow"
          numberStatistics="12"
          content="Redações"
          iconSrc={iconPaper}
        />
        <Card
          className="bg-opaque-green"
          numberStatistics="5"
          content="Aulas"
          iconSrc={iconPlay}
        />
        <Card
          className="bg-opaque-purple"
          numberStatistics="3"
          content="Simulados"
          iconSrc={iconPen}
        />
      </div>
    </section>
  )
}
