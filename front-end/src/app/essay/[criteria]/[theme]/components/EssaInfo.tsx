interface EssayInfoProps {
  characters: number;
  words: number;
  paragraphs: number;
}

export function EssayInfo({ characters, paragraphs, words }: EssayInfoProps) {
  return (
    <div className="flex justify-between bg-third text-white rounded-b-xl px-4 relative bottom-6 -z-0">
      <span>Caracteres {characters}</span>
      <span>Palavras {words}</span>
      <span>Parágrafos {paragraphs}</span>
    </div>
  );
}
