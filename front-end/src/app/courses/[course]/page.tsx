'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import Link from 'next/link';
import { useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function CoursePage() {
  const [showModules, setShowModules] = useState(new Set<number>());

  const handleModules = (module: number) => {
    if (showModules.has(module)) {
      const newSet = new Set(showModules);
      newSet.delete(module);
      setShowModules(newSet);
      return;
    }

    setShowModules(new Set(showModules).add(module));
  };

  return (
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header />
        <div className="px-10">
          <section>
            <div className="flex">
              {' '}
              <h2 className="text-xl text-primary dark:text-white font-semibold">
                Matemática básica para o ENEM
              </h2>
            </div>
            <div className="border-l">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <>
                    <div
                      className="flex  items-start gap-4 mt-8"
                      onClick={() => handleModules(item)}
                    >
                      <span>
                        <FaRegDotCircle className="relative -left-2" />
                      </span>
                      <h3>Módulo {item}</h3>
                      <IoIosArrowDown />
                    </div>
                    {showModules.has(item) && (
                      <div className="flex flex-col w-1/2 gap-4 px-8 py-4 mt-4 ml-8 border-third rounded-bg hover:border-2">
                        <h2>
                          <Link href="#" className="font-medium">
                            Aula 1 - Regra de três{' '}
                          </Link>
                        </h2>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Iste placeat ipsum ad temporibus obcaecati
                          repudiandae accusamus dicta nesciunt odio ab,
                          cupiditate atque eum pariatur doloremque eos. Ea non
                          amet similique! Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Fugit sit distinctio illo architecto
                          velit
                        </p>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
