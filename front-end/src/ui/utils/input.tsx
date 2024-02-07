import { ComponentType, InputHTMLAttributes, forwardRef } from 'react'

type propsInput = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, propsInput>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`
        ${props.className || ''}
        p-3 bg-transparent border border-gray-1 rounded-lg
        outline-white font-normal
        dark:text-white
        dark:outline-none
        dark:border-gray-400
        `}
    />
  )
})

Input.displayName = 'Input'
