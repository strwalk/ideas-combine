import { NextResponse } from 'next/server';
import prisma from '../../_lib/connectToPrisma';

export async function POST(req: Request) {
  try {
    const { userId, word1Id, word2Id } = await req.json();

    const response = await prisma.ideas.create({
      data: {
        user_id: userId,
        word1_id: word1Id,
        word2_id: word2Id,
      },
    });

    if (response) {
      return NextResponse.json({ status: 201 });
    }
  } catch (err) {
    return NextResponse.json({ err });
  }
}

export async function DELETE(req: Request) {
  try {
    const { ideaId } = await req.json();

    await prisma.ideas.delete({
      where: {
        id: ideaId,
      },
    });

    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json({ err });
  }
}
