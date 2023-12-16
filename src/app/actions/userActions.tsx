'use server';

import bcrypt from 'bcrypt';
import { connectToDatabase } from '../helpers';
import { prisma } from '@/utils';
import { revalidatePath } from 'next/cache';

import { redirect } from 'next/navigation';

export const createUser = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!name || !email || !password) {
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await connectToDatabase();

  await prisma.user.create({
    data: { name, email, hashedPassword },
  });

  await prisma.$disconnect();

  revalidatePath('/');

  redirect('/api/auth/signin');
};
