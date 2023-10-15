import prisma from './_lib/connectToPrisma';
import wordsJson from './_lib/seeds/words.json';
import { generateRandomNumber, convertToTwoDimensionalArray } from './_utils';
import WordCards from './_components/wordCards';
import ShuffleButton from './_components/shuffleButton';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const randomNumbersForDb = new Array(8)
    .fill(0)
    .map(() => generateRandomNumber(wordsJson.length));

  const wordsResponse = await prisma.words.findMany({
    where: {
      id: {
        in: randomNumbersForDb,
      },
    },
  });

  const randomNumbers = convertToTwoDimensionalArray(randomNumbersForDb, 2);

  const wordsList = randomNumbers.map((numbers: number[]) =>
    numbers.map((number) =>
      wordsResponse.find((word: Word) => word.id === number)
    )
  );

  return (
    <main className="flex justify-center py-20 min-h-screen">
      <section className="w-[50rem]">
        <section className="flex justify-center">
          <section className="text-center w-full">
            <h1 className="text-2xl">アイディア シャッフル</h1>
            <section className="flex justify-center mt-10">
              <section className="flex flex-col gap-14 text-2xl">
                {wordsList.map((twoWords, index) => (
                  <section key={index} className="flex items-center gap-5">
                    <WordCards words={twoWords} />
                  </section>
                ))}
              </section>
            </section>
            <section className="mt-20">
              <ShuffleButton />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
