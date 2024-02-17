import React from 'react';

interface propsButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
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
      p-3
      rounded-xl
      ${props.outline ? 'border' : 'bg-third'}
      ${props.className} 
      `}
    >
      {children}
    </button>
  );
}