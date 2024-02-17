'use client';

import { Header } from '@/components/Header';
import { MenuAside } from '@/components/MenuAside';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { FaRegDotCircle } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function CoursePage() {
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
    <div className="flex">
      <MenuAside />
      <main className="w-full">
        <Header />
        <div className="flex flex-col gap-8 px-10">
          <section>
            <div className="flex">
              <h2 className="text-xl text-primary dark:text-white font-semibold">
                Matemática básica para o ENEM
              </h2>
            </div>
          </section>
          <section className="w-full flex gap-8">
            {/* <InfoUserAside /> */}
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8Ajna_oOQts?si=uDNBwcPlQA1gzPZE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              className="rounded-xl w-[70%] h-[35rem]"
            ></iframe>
            <div className="flex flex-col gap-8 border-l">
              {[1, 2, 3, 4, 5].map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="flex items-start gap-4"
                      onClick={() => handleModules(item)}
                    >
                      <span>
                        <FaRegDotCircle
                          className="relative -left-2"
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
                    {(showModules.has(item) ||
                      moduleActive === item.toString()) && (
                      <div className="animate-appear-from-below flex flex-col gap-4  mt-4 ml-8">
                        <h2 className="transition-all text-secundary hover:text-third dark:hover:text-zinc-300 ">
                          <Link href="#" className="font-medium">
                            Aula 1 - Regra de três{' '}
                          </Link>
                        </h2>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
          <section className="w-[70%] flex flex-col gap-2">
            <h2 className="font-semibold text-xl text-primary">Descrição</h2>
            <p className="text-secundary dark:text-zinc-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              necessitatibus deserunt odio quaerat temporibus cumque eligendi
              unde inventore! Rem architecto perspiciatis eius dignissimos
              provident quae amet deserunt quidem adipisci fuga. Natus
              exercitationem magni sapiente? Labore possimus accusantium sunt
              facere, magni dolor iste vero, atque sed incidunt omnis id quos,
              fugiat neque porro quas numquam? Placeat ab exercitationem aperiam
              molestias delectus?
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
