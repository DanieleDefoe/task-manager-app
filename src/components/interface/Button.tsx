'use client';
import clsx from 'clsx';
import { signOut } from 'next-auth/react';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';
import { type ReactNode } from 'react';

interface buttonProps {
  type?: 'button' | 'submit' | 'reset';
  text: string | ReactNode;
  onClick?(): void;
  actionButton?: boolean;
  logOut?: boolean;
  logIn?: boolean;
}

const logout = async () => {
  console.log('hello blya');
  await signOut();
};

const login = (router: AppRouterInstance) => {
  router.push('/api/auth/signin');
};

const Button = ({
  type,
  text,
  onClick,
  actionButton,
  logIn,
  logOut,
}: buttonProps) => {
  const router = useRouter();

  const clickHandler = logIn ? () => login(router) : logOut ? logout : onClick;

  return (
    <button
      type={type}
      onClick={clickHandler}
      className={clsx(
        actionButton && 'bg-orange-700 rounded-full p-2 text-white',
        'bg-orange-700 px-2 text-white'
      )}
    >
      {text}
    </button>
  );
};

export default Button;
