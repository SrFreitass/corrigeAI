import { ReactNode } from 'react';

type SubTitleSectionProps = React.HTMLAttributes<HTMLParagraphElement>;
export function SubTitleSection({
  children,
  ...props
}: {
  children: ReactNode;
} & SubTitleSectionProps) {
  return (
    <h3 {...props} className={`${props.className} text-secundary`}>
      {children}
    </h3>
  );
}
