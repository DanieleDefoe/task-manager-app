import { type FC } from 'react';
import { Todo } from '.';

interface Props {
  todos: Array<Partial<TodoModel>>;
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <section className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
      {todos.map((todo) => (
        <section className="w-full" key={todo.id}>
          <Todo todo={todo} />
        </section>
      ))}
    </section>
  );
};

export default TodoList;
