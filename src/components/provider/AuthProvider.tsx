'use client';

import { SessionProvider } from 'next-auth/react';
import { FC } from 'react';

const AuthProvider: FC<LayoutProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
