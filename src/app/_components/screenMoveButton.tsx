import Link from 'next/link';

interface Props {
  href: string;
  title: string;
  arrowDirection?: 'left' | 'right';
}

export default function ScreenMoveButton({
  title,
  href,
  arrowDirection,
}: Props) {
  const paddingX =
    arrowDirection === 'left'
      ? 'pl-3 pr-6'
      : arrowDirection === 'right'
      ? 'pl-6 pr-3'
      : '';

  return (
    <Link
      href={href}
      className={`border border-gray-400 hover:bg-gray-50 py-2 ${paddingX} flex justify-center items-center gap-1 text-gray-500 w-full sm:w-[20rem]`}
    >
      {arrowDirection === 'left' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      )}
      <span className="sm:text-lg">{title}</span>
      {arrowDirection === 'right' && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      )}
    </Link>
  );
}
