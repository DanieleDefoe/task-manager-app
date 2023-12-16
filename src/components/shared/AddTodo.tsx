import { create } from '@/app/actions';
import { Form, Input, Button } from '../interface';

const AddTodo = async () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <section className="flex gap-2">
        <Input name="input" type="text" placeholder="Добавить задачу..." />
        <Input name="author" type="hidden" />
        <Button type="submit" text="Добавить" />
      </section>
    </Form>
  );
};

export default AddTodo;
