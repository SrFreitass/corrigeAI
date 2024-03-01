import { TitleSection } from '@/components/ui/commons/titleSection';

export function Aside() {
  return (
    <aside className="max-h-[60vh] overflow-y-auto flex flex-col gap-8 p-8 rounded-bg shadow-md bg-white dark:bg-dark">
      <TitleSection>Temas de redação - Popular 🔥</TitleSection>
      <div className="flex flex-col gap-4">
        {/* <div className="flex gap-4">
          <Image
            src={ilustrationSrc}
            alt="Imagem ilustrando o tema"
            className="rounded-xl"
            width={150}
            height={90}
          />
          <div>
            <span className="text-secundary">Tema</span>
            <h3 className="text-primary dark:text-white font-medium">
              {theme}
            </h3>
            <h4 className="text-primary dark:text-secundary">{author}</h4>
          </div>
        </div> */}
      </div>
    </aside>
  );
}
