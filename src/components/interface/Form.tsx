'use client';

import { useRef, type ReactNode, type FC } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  action(formData: FormData): Promise<void | boolean>;
  onSubmit?: () => void;
}

const Form: FC<Props> = ({ children, action, className, onSubmit }) => {
  const ref = useRef<HTMLFormElement>(null);

  const handleAction = async (formData: FormData) => {
    await action(formData);
    ref.current?.reset();
  };

  return (
    <form
      className={className}
      action={handleAction}
      onSubmit={onSubmit}
      ref={ref}
    >
      {children}
    </form>
  );
};

export default Form;
