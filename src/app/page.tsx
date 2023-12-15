import { AddTodo, Todo } from '@/components';
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
    <div className="w-full py-20 flex justify-center items-center flex-col">
      <h1 className="text-3xl font-extrabold uppercase">to-do-app</h1>
      <h2 className="text-3xl font-extrabold uppercase">
        Next.js 14 <span className="text-orange-700 ml-2">server actions</span>
      </h2>

      <div className="flex flex-col items-center justify-center w-full max-w-[1000px] mt-5">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo) => (
            <div className="w-full" key={todo.id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
