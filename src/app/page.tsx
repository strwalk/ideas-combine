import type { Metadata } from 'next';
import { getUserId } from './_lib/auth';
import wordsJson from './_lib/words.json';
import { generateRandomNumber } from './_utils';
import WordCards from './_components/wordCards';
import SaveButton from './_components/saveButton';
import ScreenMoveButton from './_components/screenMoveButton';
import ShuffleButton from './_components/shuffleButton';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Top | Combine Ideas',
};

export default async function Home() {
  const userId = await getUserId();

  const randomNumbers = new Array(2)
    .fill(0)
    .map(() => generateRandomNumber(wordsJson.length));

  const wordsList = randomNumbers.map(
    (randomNumber: number) =>
      wordsJson.find((word) => word.id === randomNumber) ?? wordsJson[0]
  );

  return (
    <main className="flex justify-center pt-8 sm:pt-10 pb-12 px-4">
      <section className="w-full md:w-[35rem] bg-white pt-10 sm:pt-14 pb-9 px-4 rounded-xl shadow-md">
        <section className="flex justify-center text-center">
          <section className="flex flex-col gap-9 w-full sm:w-[20rem]">
            <h1 className="text-2xl">Combine Ideas</h1>
            <WordCards wordsList={wordsList} />
            <section className="flex flex-col gap-6 sm:mt-5 sm:text-lg">
              {userId && (
                <SaveButton
                  userId={userId}
                  word1Id={wordsList[0].id}
                  word2Id={wordsList[1].id}
                />
              )}
              <ShuffleButton />
              {userId && (
                <ScreenMoveButton
                  href="/favorites"
                  title="Favorites List"
                  arrowDirection="right"
                />
              )}
              <section className="text-start flex flex-col gap-y-3 text-xs text-gray-500">
                {!userId && <p>ユーザー登録で保存機能が使えるようになります</p>}
                <p>
                  サービスや保存したコンテンツは、予告なく変更、終了、削除されることがございます。予めご了承ください。
                </p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
