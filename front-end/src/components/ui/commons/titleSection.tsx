import React, { ReactNode } from 'react';

type TitleSectionProps = React.HTMLAttributes<HTMLParagraphElement>;
export function TitleSection({
  children,
  ...props
}: {
  children: ReactNode;
} & TitleSectionProps) {
  return (
    <h2
      {...props}
      className={`text-2xl text-primary font-semibold dark:text-white ${props.className}`}
    >
      {children}
    </h2>
  );
}
