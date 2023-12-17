import type { FC } from 'react';

import { Form, Button, Input } from '..';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { changeStatus } from '@/app/actions';

interface Props {
  todo: Partial<TodoModel>;
}

const ChangeTodo: FC<Props> = ({ todo }: Props) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default ChangeTodo;
