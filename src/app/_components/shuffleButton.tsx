'use client';

import { useRouter } from 'next/navigation';

export default function ShuffleButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      className="border border-gray-400 hover:bg-gray-50 py-2 px-8 flex items-center gap-2.5 text-gray-500"
    >
      <span className="text-sm sm:text-base lg:text-lg">Shuffle</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 sm:w-6 h-5 sm:h-6 font-bold"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
        />
      </svg>
    </button>
  );
}
