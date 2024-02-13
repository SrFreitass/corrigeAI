import googleLogo from '@/../public/logo/google_logo.svg';
import { Button } from '@/components/ui/commons/button';
import { Input } from '@/components/ui/commons/input';
import { InputWithIcon } from '@/components/ui/commons/inputWithIcon';
import { ParagraphError } from '@/components/ui/commons/paragraphError';
import { postLogin } from '@/http/post.login';
import { themes } from '@/styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export function FormLogin() {
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [errorForm, setErrorForm] = useState<Set<string>>(new Set());
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  console.log(errorForm);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(emailInputRef);
    console.log(passwordInputRef);

    let errors = 0;
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;
    const checkbox = checkboxRef.current?.checked;

    if (!email) {
      setErrorForm((prev) => new Set(prev).add('EMAIL_EMPTY'));
      errors++;
    }

    if (errorForm.has('EMAIL_EMPTY') && email) {
      errorForm.delete('EMAIL_EMPTY');
      errors++;
    }

    if (!password || password?.length < 8) {
      setErrorForm((prev) => new Set(prev).add('PASSWORD_EMPTY'));
      errors++;
    }

    if (errorForm.has('PASSWORD_EMPTY') && password && password.length >= 8) {
      errorForm.delete('PASSWORD_EMPTY');
      errors++;
    }

    if (errorForm.has('PASSWORD_EMPTY') || errorForm.has('EMAIL_EMPTY')) return;

    if (errors > 0) return;

    try {
      toast.loading('Carregando...', {
        duration: 1000,
      });
      await postLogin({
        email,
        password,
        checkbox,
        setErrorForm,
      });
      router.push('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-col gap-4 w-1/4 bg-white dark:bg-dark py-20 px-10 rounded-xl drop-shadow-xl"
    >
      <div>
        <h1 className="text-2xl font-bold text-primary dark:text-white text-center mb-2">
          Acesse sua conta CorrigiAI
        </h1>
        <h2 className="text-gray-4 text-center">
          Faça login para entrar em sua conta
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
        icon={<MdEmail size={24} color={themes.colors.primary} />}
        ref={emailInputRef}
        type="email"
        placeholder="E-mail"
        className="w-full"
      />

      {errorForm.has('EMAIL_EMPTY') && (
        <ParagraphError>E-mail inválido.</ParagraphError>
      )}
      {errorForm.has('EMAIL_INCORRECT') && (
        <ParagraphError>Este e-mail não existe na plataforma.</ParagraphError>
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
          type={`${showPassword ? 'text' : 'password'}`}
          placeholder="Senha"
          className={`${errorForm.has('PASSWORD') && 'border-red-700'} pr-12 w-full`}
        />
      </div>

      {errorForm.has('PASSWORD_EMPTY') && (
        <ParagraphError>Senha inválida.</ParagraphError>
      )}
      {errorForm.has('PASSWORD_INCORRECT') && (
        <ParagraphError>Senha incorreta.</ParagraphError>
      )}

      <div className="flex gap-2">
        <Input ref={checkboxRef} type="checkbox" className="w-4" />
        <p className="font-medium text-primary dark:text-white">
          Manter conectado
        </p>
      </div>

      <Button className="dark:bg-third">Entrar</Button>

      <p className="text-center text-primary font-medium dark:text-secundary">
        Não tem uma conta?{' '}
        <Link href="/auth/register">
          <u className="dark:text-white">Crie uma</u>
        </Link>
      </p>
    </form>
  );
}
