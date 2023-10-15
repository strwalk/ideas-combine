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
    <div className="w-[12rem] border border-gray-400 py-4 px-3 h-full flex justify-center items-center ">
      <p>{word?.word}</p>
    </div>
  );
}

export default function WordCards({ words }: WordCardsProps) {
  return (
    <>
      <WordCard word={words[0]} />
      <p>X</p>
      <WordCard word={words[1]} />
      <SaveButton word1Id={words[0]?.id} word2Id={words[1]?.id} />
    </>
  );
}
