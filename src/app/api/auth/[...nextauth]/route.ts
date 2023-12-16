import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { users } from '@/app/helpers/constants';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Emain and Password',
      credentials: {
        email: { label: 'Email', placeholder: 'Enter email' },
        password: { label: 'Password', placeholder: 'Enter password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          return null;
        }

        const user = users.find((u) => u.email === credentials.email);

        if (user?.password === credentials.password) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
