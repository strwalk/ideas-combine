import { NextResponse } from 'next/server';
import prisma from '../../_lib/connectToPrisma';

export async function POST(req: Request) {
  const { userId, word1Id, word2Id } = await req.json();

  await prisma.ideas.create({
    data: {
      user_id: userId,
      word1_id: word1Id,
      word2_id: word2Id,
      comment: '',
    },
  });

  return NextResponse.json({ res: 'ok' });
}
