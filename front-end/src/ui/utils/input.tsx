import { InputHTMLAttributes, forwardRef } from 'react'

type propsInput = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, propsInput>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`
      ${props.className || ''}
      p-4 bg-transparent border border-gray-1 rounded-md
      `}
    />
  )
})

Input.displayName = 'Input'
