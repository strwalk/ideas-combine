import { getUserId } from '../_lib/auth';
import SaveButton from './saveButton';

type WordOrUndefined = Word | undefined;

interface WordCardProps {
  word: WordOrUndefined;
}

interface WordCardsProps {
  words: WordOrUndefined[];
}

function WordCard({ word }: WordCardProps) {
  return (
    <div className="w-[5rem] md:w-[10rem] lg:w-[12rem] border border-gray-300 py-2 md:py-3 lg:py-4 px-2 sm:px-3 h-full flex justify-center items-center">
      <p>{word?.word}</p>
    </div>
  );
}

export default async function WordCards({ words }: WordCardsProps) {
  const userId = await getUserId();

  return (
    <>
      <WordCard word={words[0]} />
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 md:w-5 lg:w-6 h-4 md:h-5 lg:h-6 text-gray-600 sm:text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </p>
      <WordCard word={words[1]} />
      {userId && (
        <SaveButton
          userId={userId}
          word1Id={words[0]?.id}
          word2Id={words[1]?.id}
        />
      )}
    </>
  );
}
