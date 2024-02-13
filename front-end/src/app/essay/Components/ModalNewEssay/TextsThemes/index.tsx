import { Button } from '@/components/ui/commons/button';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type TextsThemesProps = {
  setSection: (item: string) => void;
};

export function TextsThemes({ setSection }: TextsThemesProps) {
  return (
    <div className="flex flex-col gap-4 overflow-y-auto max-h-[32rem] min-h-[32rem]">
      <h2 className="font-semibold text-xl text-primary dark:text-white">
        Textos motivadores
      </h2>
      <h2 className="text-primary dark:text-white text-lg">Texto</h2>
      <p className="text-secundary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis
        tincidunt fermentum. Fusce in accumsan arcu. Morbi aliquet tincidunt
        augue, nec rhoncus elit consectetur eget. Donec eget ligula non metus
        porta tincidunt. Ut tortor dolor, consectetur eu auctor vel, egestas
        vitae urna. Aliquam erat volutpat. Vivamus ut mattis ipsum. In tortor
        eros, faucibus sit amet sollicitudin aliquet, vestibulum eget enim.
        Mauris suscipit rhoncus augue nec maximus. Aenean at velit dolor. Sed ac
        porttitor justo. Vestibulum molestie mi in gravida porta. Etiam sapien
        tellus, dictum quis lorem at, molestie venenatis dui. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Mauris sit amet diam ultrices, consectetur sem eget, pulvinar
        nisi. Maecenas quis lorem varius, feugiat erat quis, rutrum sem.
      </p>
      <h2 className="text-primary dark:text-white text-lg">Texto</h2>
      <p className="text-secundary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis
        tincidunt fermentum. Fusce in accumsan arcu. Morbi aliquet tincidunt
        augue, nec rhoncus elit consectetur eget. Donec eget ligula non metus
        porta tincidunt. Ut tortor dolor, consectetur eu auctor vel, egestas
        vitae urna. Aliquam erat volutpat. Vivamus ut mattis ipsum. In tortor
        eros, faucibus sit amet sollicitudin aliquet, vestibulum eget enim.
        Mauris suscipit rhoncus augue nec maximus. Aenean at velit dolor. Sed ac
        porttitor justo. Vestibulum molestie mi in gravida porta. Etiam sapien
        tellus, dictum quis lorem at, molestie venenatis dui. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Mauris sit amet diam ultrices, consectetur sem eget, pulvinar
        nisi. Maecenas quis lorem varius, feugiat erat quis, rutrum sem.
      </p>
      <div className="flex self-end gap-6 absolute bottom-20">
        <Button
          className="flex items-center gap-6 min-w-32"
          onClick={() => setSection('THEME')}
        >
          <FaArrowLeft />
          Voltar
        </Button>
        <Button className="flex items-center gap-6 min-w-32">
          Avançar <FaArrowRight />
        </Button>
      </div>
    </div>
  );
}
