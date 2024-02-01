import React from 'react'

interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean
}

export function Button({
  children,
  ...props
}: { children: React.ReactNode } & propsButton) {
  return (
    <button
      {...props}
      className={`
      text-white
      font-semibold
      p-4
      rounded-md
      ${props.outline ? 'border' : 'bg-secundary'}
      ${props.className} 
      `}
    >
      {children}
    </button>
  )
}
