import { Button, Form, Input } from '@/components';
import { createUser } from '../actions';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Регистрация',
  description: 'Страница регистрации на платформе, форма создания аккаунта',
};

const Signup = async () => {
  const auth = await getServerSession(authOptions);

  if (auth) {
    redirect('/');
  }

  return (
    <section className="w-full min-h-screen flex items-center justify-center">
      <section className="w-96 bg-black text-white p-7 rounded-xl shadow-xl">
        <h3 className="text-2xl font-extrabold uppercase text-center">
          Регистрация
        </h3>
        <Form action={createUser}>
          <section className="w-full flex flex-col gap-4 mt-4 text-black">
            <section className="flex flex-col gap-2">
              <label className="section-header text-white">Имя</label>
              <Input name="name" type="text" placeholder="Введите имя..." />
            </section>
            <section className="flex flex-col gap-2">
              <label className="section-header text-white">Email</label>
              <Input name="email" type="text" placeholder="Введите email..." />
            </section>
            <section className="flex flex-col gap-2">
              <label className="section-header text-white">Пароль</label>
              <Input
                name="password"
                type="password"
                placeholder="Введите пароль "
              />
            </section>

            <Button type="submit" text="Зарегистрироваться" />
            <p className="uppercase text-center font-bold text-gray-600">
              - или -
            </p>
            <Link
              href="/api/auth/signin"
              className="text-center font-bold text-blue-500 hover:text-blue-700 transition-all"
            >
              Уже есть аккаунт?
            </Link>
          </section>
        </Form>
      </section>
    </section>
  );
};

export default Signup;
