import { getUserId } from './_lib/auth';
import prisma from './_lib/connectToPrisma';
import wordsJson from './_lib/seeds/words.json';
import { generateRandomNumber, convertToTwoDimensionalArray } from './_utils';
import WordCards from './_components/wordCards';
import ScreenMoveButton from './_components/screenMoveButton';
import ShuffleButton from './_components/shuffleButton';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const userId = await getUserId();

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
    <main className="flex justify-center mt-10 pb-20">
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
            <section className="mt-9 md:mt-12 flex justify-center gap-5 md:gap-8 flex-wrap mx-10">
              <ShuffleButton />
              {userId && (
                <ScreenMoveButton
                  href="/favorites"
                  title="Favorites List"
                  arrowDirection="right"
                />
              )}
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
