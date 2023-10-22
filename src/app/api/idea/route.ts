import { NextResponse } from 'next/server';
import prisma from '../../_lib/connectToPrisma';

export async function POST(req: Request) {
  const { userId, word1Id, word2Id } = await req.json();

  await prisma.ideas.create({
    data: {
      user_id: userId,
      word1_id: word1Id,
      word2_id: word2Id,
    },
  });

  return NextResponse.json({ res: 'ok' });
}

export async function DELETE(req: Request) {
  const { ideaId } = await req.json();

  await prisma.ideas.delete({
    where: {
      id: ideaId,
    },
  });

  return NextResponse.json({ res: 'ok' });
}
