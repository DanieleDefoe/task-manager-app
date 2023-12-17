//@ts-nocheck
import { AddTodo, Button, TodoList } from '@/components';
import { prisma } from '@/utils';
import { getServerSession } from 'next-auth/next';
import { authOptions } from './api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

async function getData(email: string) {
  const data = await prisma.todo.findMany({
    where: { authorEmail: email },
    select: { title: true, id: true, isCompleted: true },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export const revalidate = 0;

const Home = async () => {
  const auth = await getServerSession(authOptions);

  if (!auth) {
    redirect('/signup');
  }

  const data = await getData(auth.user?.email);

  return (
    <section className="w-full py-20 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-extrabold uppercase">список задач</h1>
      <h2 className="text-3xl font-extrabold uppercase">
        Добро пожаловать{' '}
        <span className="text-orange-700 ml-2">{auth.user?.name}</span>!
      </h2>

      <section className="flex flex-col items-center justify-center w-full max-w-[1000px] mt-5">
        <div className="mb-6 h-10">
          <Button text="Выйти из аккаунта" type="button" logOut />
        </div>

        <AddTodo />
        {data.length === 0 ? (
          <h3 className="text-xl font-extrabold uppercase text-black mt-10">
            Задачи отсутствуют...
          </h3>
        ) : (
          <TodoList todos={data} />
        )}
      </section>
    </section>
  );
};

export default Home;
