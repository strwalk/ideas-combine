'use client';

type WordIdOrUndefined = number | undefined;

interface Props {
  userId: string;
  word1Id: WordIdOrUndefined;
  word2Id: WordIdOrUndefined;
}

const saveIdea = async (
  userId: string,
  word1Id: WordIdOrUndefined,
  word2Id: WordIdOrUndefined
) => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/idea`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, word1Id, word2Id }),
    });
    window.alert('保存しました');
  }
};

export default function SaveButton({ userId, word1Id, word2Id }: Props) {
  return (
    <button
      onClick={() => saveIdea(userId, word1Id, word2Id)}
      className="bg-[#f76685] hover:bg-rose-500 text-white rounded-md shadow py-2 md:py-3 px-2 md:px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
      </svg>
    </button>
  );
}
