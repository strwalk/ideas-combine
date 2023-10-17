'use client';

import { useRouter } from 'next/navigation';

interface Props {
  ideaId: number;
}

const deleteIdea = async (router: any, ideaId: number) => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/idea`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ideaId }),
    });
    window.alert('削除しました');
    router.refresh();
  }
};

export default function DeleteButton({ ideaId }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={() => deleteIdea(router, ideaId)}
      className="bg-green-300 hover:bg-green-400 rounded-md py-1 px-4"
    >
      削除
    </button>
  );
}
