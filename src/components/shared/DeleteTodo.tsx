'use client';
import { type FC } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';

import { Button, Form, Input } from '..';
import { deleteTodo } from '@/app/actions';

interface Props {
  todo: Partial<TodoModel>;
}

const DeleteTodo: FC<Props> = ({ todo }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<BsFillTrashFill />} type="submit" />
    </Form>
  );
};

export default DeleteTodo;
