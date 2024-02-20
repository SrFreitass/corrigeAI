import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export function CoursePlan() {
  const [showModules, setShowModules] = useState(new Set<number>());
  const queryParams = useSearchParams();

  const moduleActive = queryParams.get('module');

  const handleModules = (module: number) => {
    if (moduleActive) {
      history.replaceState(null, '', '/courses/[course]');
    }

    if (showModules.has(module)) {
      const newSet = new Set(showModules);
      newSet.delete(module);
      setShowModules(newSet);
      return;
    }

    setShowModules(new Set(showModules).add(module));
  };

  return (
    <div className="flex flex-col gap-8 max-h-[35rem] overflow-y-auto px-2">
      <div className="flex flex-col gap-8 border-l px-2">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return (
            <div key={index}>
              <div
                className="flex items-start gap-4"
                onClick={() => handleModules(item)}
              >
                <span className="">
                  <FaRegDotCircle
                    className="relative right-4"
                    color="#151D48"
                  />
                </span>
                <h3 className="w-20 font-semibold text-primary dark:text-white">
                  Módulo {item}
                </h3>
                {showModules.has(item) ? (
                  <IoIosArrowUp color="#151D48" />
                ) : (
                  <IoIosArrowDown color="#151D48" />
                )}
              </div>
              {(showModules.has(item) || moduleActive === item.toString()) && (
                <div className="animate-appear-from-below flex flex-col gap-4  mt-4 ml-8">
                  <h2 className="transition-all text-secundary hover:text-third dark:hover:text-zinc-300 ">
                    <Link href="#" className="font-medium">
                      Aula 1 - Regra de três{' '}
                    </Link>
                  </h2>
                  <h2 className="transition-all text-secundary hover:text-third dark:hover:text-zinc-300 ">
                    <Link href="#" className="font-medium">
                      Aula 2 - Regra de três composta{' '}
                    </Link>
                  </h2>
                  <h2 className="transition-all text-secundary hover:text-third dark:hover:text-zinc-300 ">
                    <Link href="#" className="font-medium">
                      Exercícios - Regra de três simples & composta{' '}
                    </Link>
                  </h2>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
