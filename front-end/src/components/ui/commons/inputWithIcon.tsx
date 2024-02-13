import { InputHTMLAttributes, forwardRef } from 'react';

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ReactNode;
}

export const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>(
  (props, ref) => {
    return (
      <div className="flex flex-row-reverse items-center">
        <span className="absolute p-4">{props.icon}</span>
        <input
          {...props}
          ref={ref}
          className={`
          ${props.className || ''}
          pr-12 p-3 bg-transparent border border-gray-1 rounded-lg
          outline-white font-normal
          dark:text-white
          dark:outline-none
          dark:border-gray-400
          `}
        />
      </div>
    );
  },
);

InputWithIcon.displayName = 'InputWithIcon';
