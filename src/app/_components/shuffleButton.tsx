'use client';

import { useRouter } from 'next/navigation';

export default function ShuffleButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      className="bg-blue-200 text-xl py-3 px-6 rounded-md shadow"
    >
      シャッフル
    </button>
  );
}
