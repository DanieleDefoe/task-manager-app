'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/utils/prisma';

export async function create(formData: FormData) {
  try {
    const input = formData.get('input') as string;

    if (!input.trim()) {
      return;
    }

    await prisma.todo.create({
      data: {
        title: input,
      },
    });

    revalidatePath('/');
  } catch (error) {
    console.log(error);
  }
}

export async function changeStatus(formData: FormData) {
  try {
    const inputId = formData.get('inputId') as string;
    const todo = await prisma.todo.findUnique({ where: { id: inputId } });

    if (!todo || !inputId) {
      return;
    }

    const updatedStatus = !todo?.isCompleted;

    await prisma.todo.update({
      where: { id: inputId },
      data: { isCompleted: updatedStatus },
    });

    revalidatePath('/');

    return updatedStatus;
  } catch (error) {
    console.log(error);
  }
}

export async function edit(formData: FormData) {
  try {
    const input = formData.get('newTitle') as string;
    const inputId = formData.get('inputId') as string;

    if (!input || !inputId) {
      return;
    }

    await prisma.todo.update({
      where: { id: inputId },
      data: { title: input },
    });

    revalidatePath('/');
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(formData: FormData) {
  try {
    const inputId = formData.get('inputId') as string;

    if (!inputId) {
      return;
    }

    await prisma.todo.delete({ where: { id: inputId } });

    revalidatePath('/');
  } catch (error) {
    console.log(error);
  }
}
