'use client';

import type { Todo } from '@prisma/client';
import { type FC, useState } from 'react';
import { BiEdit } from 'react-icons/bi';

import { Form, Input, Button } from '..';

import { edit } from '@/app/actions';

interface Props {
  todo: Partial<Todo>;
}

const EditTodo: FC<Props> = ({ todo }) => {
  const [editTodo, setEditTodo] = useState<boolean>(false);

  const handleEdit = () => {
    if (todo.isCompleted) {
      return;
    }
    setEditTodo((prev) => !prev);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />

      {editTodo && (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button type="submit" text="Save" />
          </div>
        </Form>
      )}
    </div>
  );
};

export default EditTodo;
