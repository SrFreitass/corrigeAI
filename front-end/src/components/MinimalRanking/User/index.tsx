import Image from 'next/image'

type UserRankingProps = {
  userAvatarSrc: string
  medalSrc?: string
  name: string
  position: number
}

export function UserRanking({
  userAvatarSrc,
  medalSrc,
  name,
  position,
}: UserRankingProps) {
  return (
    <li className="flex items-center gap-2 font-medium dark:text-gray-200">
      <Image
        src={userAvatarSrc}
        alt="Avatar do usuário"
        width={28}
        height={28}
        className="rounded-full"
      />
      {position}ª - {name}
      {medalSrc && (
        <Image src={medalSrc} width={28} alt="Medalha de primeiro Lugar" />
      )}
    </li>
  )
}
