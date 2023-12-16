import type { Todo as TodoModel } from '@prisma/client';
import { type CSSProperties, type FC } from 'react';
import { ChangeTodo, DeleteTodo, EditTodo } from '.';

interface Props {
  todo: Partial<TodoModel>;
}

const Todo: FC<Props> = ({ todo }: Props) => {
  const todoStyle: CSSProperties = {
    textDecoration: todo.isCompleted ? 'line-through' : 'none',
    opacity: todo.isCompleted ? '0.5' : '1',
  };

  return (
    <section
      className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase">{todo.title}</span>
      <section className="flex gap-5 items-center">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </section>
    </section>
  );
};

export default Todo;
