import { connectToDatabase } from '@/app/helpers';
import { prisma } from '@/utils';
import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectToDatabase();

    const users = await prisma.user.findMany({});

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
