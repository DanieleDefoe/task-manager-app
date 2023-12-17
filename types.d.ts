interface LayoutProps {
  children: React.ReactNode;
}

interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

interface TodoModel {
  id: string;
  title: string;
  isCompleted?: boolean;
  createdAt?: Date;
  authorEmail: string;
}
