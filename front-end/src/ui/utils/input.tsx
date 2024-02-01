import React from 'react'

type propsInput = React.InputHTMLAttributes<HTMLInputElement>

export function Input(props: propsInput) {
  return (
    <input
      {...props}
      className={`
      ${props.className}
      p-4 bg-transparent border border-gray-1 rounded-md
      `}
    />
  )
}
