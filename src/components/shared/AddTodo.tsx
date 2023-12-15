import { create } from '@/app/actions';
import { Form, Input, Button } from '../interface';

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex gap-2">
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddTodo;
