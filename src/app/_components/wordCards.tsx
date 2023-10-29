interface WordCardProps {
  word: string;
}

interface WordCardsProps {
  wordsList: Word[];
}

function WordCard({ word }: WordCardProps) {
  return (
    <div className="border border-gray-300 px-3 py-3 sm:py-3.5 flex justify-center items-center">
      <p>{word}</p>
    </div>
  );
}

export default async function WordCards({ wordsList }: WordCardsProps) {
  return (
    <section>
      <section className="flex flex-col gap-y-4 text-lg">
        <WordCard word={wordsList[0].word} />
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 sm:text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <WordCard word={wordsList[1].word} />
      </section>
    </section>
  );
}
