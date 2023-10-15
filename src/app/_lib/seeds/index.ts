import prisma from '../connectToPrisma';
import wordsJson from './words.json';

async function Seeds() {
  await prisma.words.createMany({
    data: wordsJson,
  });
}

Seeds();
