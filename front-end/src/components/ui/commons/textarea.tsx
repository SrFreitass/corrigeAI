import React, { forwardRef } from 'react';

export const TextArea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>((props, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={`
      bg-transparent 
      p-4 
      rounded-lg 
      border-gray-1 border
      outline-third 
      dark:text-white
      dark:bg-dark
      ${props.className}
      
      `}
    ></textarea>
  );
});

TextArea.displayName = 'TextArea';
