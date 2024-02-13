import { HTMLAttributes } from 'react';
import { GoAlertFill } from 'react-icons/go';

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function ParagraphError({
  children,
  ...props
}: { children: React.ReactNode } & ParagraphProps) {
  return (
    <div className="flex items-center gap-2">
      <GoAlertFill size={24} color="red" className="min-w-6" />
      <p {...props} className={`text-red-700 font-medium ${props.className}`}>
        {children}
      </p>
    </div>
  );
}
