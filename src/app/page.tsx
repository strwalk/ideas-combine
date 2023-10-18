import Link from 'next/link';
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
    <main className="flex justify-center items-center py-20 min-h-screen bg-back">
      <section className="w-full md:w-[40rem] lg:w-[50rem] bg-white pt-12 pb-10 sm:px-4 rounded-xl shadow-md mx-4 sm:mx-8">
        <section className="flex justify-center">
          <section className="text-center w-full">
            <h1 className="md:text-xl lg:text-2xl">Combine Ideas</h1>
            <section className="flex justify-center mt-8 lg:mt-10">
              <section className="flex flex-col justify-center gap-6 sm:gap-8 xl:gap-10 text-sm sm:text-base lg:text-lg">
                {wordsList.map((twoWords, index) => (
                  <section
                    key={index}
                    className="flex items-center gap-2 md:gap-5"
                  >
                    <WordCards words={twoWords} />
                  </section>
                ))}
              </section>
            </section>
            <section className="mt-8 lg:mt-10 flex justify-center">
              <section>
                <ShuffleButton />
                <Link
                  href="/favorites"
                  className="border border-gray-400 hover:bg-gray-50 py-2 px-6 flex items-center gap-1 mt-6"
                >
                  <span className="text-sm sm:text-base lg:text-lg">
                    Favorites List
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </Link>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
