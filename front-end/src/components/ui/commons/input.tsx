import { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <input
      {...props}
      ref={ref}
      className={`
      p-3 bg-transparent border border-gray-1 rounded-lg
      outline-third
      font-normal
      dark:text-white
      dark:outline-none
      dark:border-gray-400
      ${props.className}
        `}
    />
  );
});

Input.displayName = 'Input';
