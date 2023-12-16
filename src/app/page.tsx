import { AddTodo, TodoList } from '@/components';
import { prisma } from '@/utils';

async function getData() {
  const data = await prisma.todo.findMany({
    select: { title: true, id: true, isCompleted: true },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

const Home = async () => {
  const data = await getData();

  return (
    <section className="w-full py-20 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-extrabold uppercase">список задач</h1>
      <h2 className="text-3xl font-extrabold uppercase">
        Next.js 14 <span className="text-orange-700 ml-2">server actions</span>
      </h2>

      <section className="flex flex-col items-center justify-center w-full max-w-[1000px] mt-5">
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
