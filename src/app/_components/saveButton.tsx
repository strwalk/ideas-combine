'use client';

type WordIdOrUndefined = number | undefined;

interface Props {
  word1Id: WordIdOrUndefined;
  word2Id: WordIdOrUndefined;
}

const saveIdea = async (
  word1Id: WordIdOrUndefined,
  word2Id: WordIdOrUndefined
) => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/idea`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId: 'A001', word1Id, word2Id }),
    });
    window.alert('保存しました');
  }
};

export default function SaveButton({ word1Id, word2Id }: Props) {
  return (
    <button
      onClick={() => saveIdea(word1Id, word2Id)}
      className="text-xl bg-red-300 hover:bg-red-400 rounded-md shadow py-3 px-4"
    >
      保存
    </button>
  );
}
