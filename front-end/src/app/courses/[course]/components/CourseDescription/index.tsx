type CourseDescriptionProps = {
  description?: string;
};

export function CourseDescription({ description }: CourseDescriptionProps) {
  return (
    <>
      <h2 className="font-semibold text-xl text-primary">Descrição</h2>
      <p className="text-secundary dark:text-zinc-300">{description}</p>
    </>
  );
}
