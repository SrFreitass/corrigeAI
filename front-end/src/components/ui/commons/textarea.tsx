import React from 'react';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      {...props}
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
}
