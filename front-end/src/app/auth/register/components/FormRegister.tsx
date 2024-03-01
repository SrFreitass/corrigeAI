import googleLogo from '@/../public/logo/google_logo.svg';
import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import { InputWithIcon } from '@/components/ui/commons/inputWithIcon';
import { ParagraphError } from '@/components/ui/commons/paragraphError';
import { postRegister } from '@/http/auth/post.register';
import { themes } from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdAccountCircle, MdEmail } from 'react-icons/md';

export function FormRegister() {
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [errorForm, setErrorForm] = useState<Set<string>>(new Set([]));
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  console.log(errorForm);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let errors = 0;
    const name = nameInputRef.current?.value;
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const checkbox = checkboxRef.current?.checked;
    console.log(name, email, password, checkbox);

    if (!name) {
      setErrorForm((prev) => new Set(prev).add('NAME_EMPTY'));
      errors++;
    }

    if (name && name?.length < 6) {
      errorForm.add('NAME_SHORT');
      errors++;
    }

    if (name && name?.length >= 6) errorForm.delete('NAME_SHORT');

    if (name) errorForm.delete('NAME_EMPTY');

    if (!email) {
      setErrorForm((prev) => new Set(prev).add('EMAIL_EMPTY'));
      errors++;
    }

    if (email) {
      errorForm.delete('EMAIL_EMPTY');

      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

      if (regex.exec(password as string) === null) {
        setErrorForm((prev) => new Set(prev).add('PASSWORD_LOW_SECURITY'));
        errors++;
      }

      console.log(regex.exec(password as string), 'as');

      if (regex.exec(password as string) !== null) {
        console.log('entrou aqui');
        errorForm.delete('PASSWORD_LOW_SECURITY');
      }

      if (errors > 0) return;

      try {
        toast.loading('Carregando...', {
          duration: 1000,
        });

        await postRegister({ name, email, password, setErrorForm, checkbox });
        router.push('./verify/email');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4 w-1/4 bg-white dark:bg-dark py-20 px-10 rounded-xl drop-shadow-xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-primary dark:text-white text-center">
          Crie uma conta no CorrigiAI
        </h1>
        <h2 className="text-gray-4 text-center">
          CorrigiAI sua plataforma preparatória para o ENEM
        </h2>
      </div>
      <Button className="!text-primary flex gap-1 justify-center bg-white border">
        Entrar com o Google <Image src={googleLogo} alt="Logo Google" />
      </Button>
      <div className="w-full flex items-center gap-4">
        <hr className="w-full border-gray-4" />
        <p className="font-semibold dark:text-white">OU</p>
        <hr className="w-full border-gray-4" />
      </div>

      <InputWithIcon
        icon={<MdAccountCircle size={24} color={themes.colors.primary} />}
        className="w-full"
      />
      {(errorForm.has('NAME_EMPTY') && (
        <ParagraphError>Nome não pode ser vazio</ParagraphError>
      )) ||
        (errorForm.has('NAME_SHORT') && (
          <ParagraphError>Minímo 6 caracteres</ParagraphError>
        ))}

      <InputWithIcon
        icon={<MdEmail size={24} color={themes.colors.primary} />}
        className="w-full"
      />
      {errorForm.has('EMAIL_ALREDY_EXISTS') && (
        <ParagraphError>E-mail já cadastrado</ParagraphError>
      )}
      {errorForm.has('EMAIL_EMPTY') && (
        <ParagraphError>E-mail não pode ser vazio</ParagraphError>
      )}
      <div className="flex flex-row-reverse items-center">
        <span className="absolute p-4" onClick={handlePassword}>
          {showPassword ? (
            <FaEye size={24} color={themes.colors.primary} />
          ) : (
            <FaEyeSlash size={25} color={themes.colors.primary} />
          )}
        </span>
        <Input
          ref={passwordInputRef}
          type={showPassword ? 'text' : 'password'}
          placeholder="Senha"
          className={`
                w-full pr-12
                ${
                  errorForm.has('PASSWORD_LOW_SECURITY') ? 'border-red-700' : ''
                }`}
        />
      </div>
      {errorForm.has('PASSWORD_LOW_SECURITY') && (
        <ParagraphError>
          A senha deve incluir: 8 caracteres, letras maiúsculas, minúsculas,
          números e símbolos.
        </ParagraphError>
      )}
      <div className="flex gap-2">
        <Input ref={checkboxRef} type="checkbox" className="w-4" />
        <p className="font-medium text-primary dark:text-white">
          Manter conectado
        </p>
      </div>

      <Button className="dark:bg-third">Registrar</Button>
      <p className="text-primary dark:text-secundary text-center font-medium ">
        Já tem uma conta?{' '}
        <Link href="./login">
          <u className="text-white">Entre aqui.</u>
        </Link>
      </p>
    </form>
  );
}
