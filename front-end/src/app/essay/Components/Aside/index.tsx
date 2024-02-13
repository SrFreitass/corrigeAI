import { TitleSection } from '@/components/ui/commons/titleSection';
import { Theme } from './Theme';

export function Aside() {
  return (
    <aside className="max-h-[60vh] overflow-y-auto flex flex-col gap-8 p-8 rounded-bg shadow-md bg-white dark:bg-dark">
      <TitleSection>Temas de redação - Popular 🔥</TitleSection>
      <div className="flex flex-col gap-4">
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />{' '}
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />{' '}
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />{' '}
        <Theme
          author="ENEM 2000"
          ilustrationSrc="https://i.imgur.com/MqGBqZs.gif"
          theme="Evasão escolar"
        />
      </div>
    </aside>
  );
}
