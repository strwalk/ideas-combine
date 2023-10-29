'use client';

interface Props {
  userId: string;
  word1Id: number;
  word2Id: number;
}

const saveIdea = async ({ userId, word1Id, word2Id }: Props) => {
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
      onClick={() => saveIdea({ userId, word1Id, word2Id })}
      className="bg-button text-white hover:bg-button-hover border border-button hover:border-button-hover rounded shadow py-2.5"
    >
      Save
    </button>
  );
}
