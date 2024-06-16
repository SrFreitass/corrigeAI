export function Section({
  children,
  ...props
}: { children: React.ReactNode } & { className?: string }) {
  return (
    <section
      className={`bg-white shadow-md p-8 flex flex-col rounded-bg dark:bg-dark ${props.className}`}
    >
      {children}
    </section>
  );
}
