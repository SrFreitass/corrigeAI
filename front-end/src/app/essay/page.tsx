'use client';

import { PiMinus, PiPlus } from 'react-icons/pi';
import MenuAside from '../components/MenuAside';
import { ChangeEvent, useState } from 'react';
import { TbArrowBack } from 'react-icons/tb';
import { BsArrowReturnLeft, BsArrowReturnRight } from 'react-icons/bs';
import { Input } from '../components/utils/input';
import { TextArea } from '../components/utils/textarea';
import { FcStatistics } from 'react-icons/fc';
import { Button } from '../components/utils/button';

export default function essay() {
    const [fontSize, setFontSize] = useState<number>(16);
    const [characteresEssay, setCharacteresEssay] = useState<string>('');
    const [fontSerif, setFonteSerif] = useState<boolean>(false);

    const handleFontSerif = () => {
        setFonteSerif(!fontSerif);
    };

    const handleFontSize = (operation: boolean) => {
        if (!operation) {
            if (fontSize <= 16) {
                setFontSize(16);
                return;
            }

            setFontSize(fontSize - 1);
            return;
        }

        if (fontSize >= 28) {
            setFontSize(16);
            return;
        }

        setFontSize(fontSize + 1);
    };

    return (
        <div className="flex">
            <MenuAside />
            <main className="w-full px-8">
                <h2 className="py-8 text-2xl font-semibold">Nova redação</h2>
                <div className="flex  gap-8">
                    <div className="flex flex-col w-1/2 gap-4">
                        <Input
                            placeholder="O titulo da redação (Não obrigatório)"
                            className="p-2 border border-2 rounded-md"
                        />
                        <TextArea
                            className={` max-h-[80vh] p-2 w-full min-h-96 border-2 rounded-md ${
                                fontSerif ? 'font-serif' : null
                            } `}
                            style={{ fontSize: fontSize }}
                            onChange={(e) => {
                                setCharacteresEssay(e.target.value);
                            }}
                            placeholder="Sua redação"
                        />
                    </div>
                    <div className="w-1/2 flex flex-col justify-between">
                        <div className="flex flex-col justfiy-between gap-2">
                            <FcStatistics size="32" />
                            <h3 className="text-xl font-medium">
                                Estatísticas
                            </h3>
                            <p>N° de caracteres: {characteresEssay.length}</p>
                            <p>
                                N° de paragráfos:{' '}
                                {[...characteresEssay.matchAll(/\n/g)].length}
                            </p>
                            <p>
                                N° de palavras:{' '}
                                {[...characteresEssay.matchAll(/ /g)].length}
                            </p>
                            <p>
                                Redações com nota alta costumam ter entre 1800 e
                                2800 caracteres (letras, sinais de pontuação,
                                espaços em branco, etc). Textos muito curtos não
                                abordam o tema, muitas vezes, com a profundidade
                                necessária. Textos muito longos, por outro lado,
                                podem ser um indicativo de que você não está
                                sintetizando o seu pensamento de forma
                                satisfatória. Também é importante atentar-se
                                sempre aos tamanhos mínimo e máximo da redação
                                exigidos pela banca avaliadora, geralmente
                                estipulados em números de linhas.
                            </p>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => handleFontSize(true)}
                                    >
                                        <PiPlus />
                                    </button>
                                    <p>{fontSize}</p>
                                    <button
                                        onClick={() => {
                                            handleFontSize(false);
                                        }}
                                    >
                                        <PiMinus />
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p>Fonte serifada?</p>
                                    <Input
                                        type="checkbox"
                                        onChange={handleFontSerif}
                                    />
                                </div>
                            </div>
                        </div>
                        <Button className="text-white font-medium">
                            Enviar redação
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
