import Image from 'next/image'
import React from 'react'

interface CardProps extends React.AllHTMLAttributes<HTMLDivElement> {
  iconSrc: string
  numberStatistics: string
  content: string
}

export function Card({
  content,
  iconSrc,
  numberStatistics,
  className,
}: CardProps) {
  return (
    <div
      className={`flex flex-col gap-4 min-w-44 max-w-44 p-5 text-primary rounded-2xl  dark:bg-[#021126] ${className}`}
    >
      <Image src={iconSrc} alt="Icon" />
      <div>
        <h3 className="text-2xl pl-1 font-semibold dark:text-white">
          {numberStatistics}
        </h3>
        <p className="pl-1 font-medium text-secundary">{content}</p>
      </div>
    </div>
  )
}
