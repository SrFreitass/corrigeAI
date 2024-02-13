import Image from 'next/image';

type ThemeProps = {
  ilustrationSrc: string;
  theme: string;
  author: string;
};

export function Theme({ author, ilustrationSrc, theme }: ThemeProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={ilustrationSrc}
        alt="Imagem ilustrando o tema"
        className="rounded-xl"
        width={150}
        height={90}
      />
      <div>
        <span className="text-secundary">Tema</span>
        <h3 className="text-primary dark:text-white font-medium">{theme}</h3>
        <h4 className="text-primary dark:text-secundary">{author}</h4>
      </div>
    </div>
  );
}
