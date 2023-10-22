import Link from 'next/link';
import { getUserId } from '../_lib/auth';

export default async function Header() {
  const userId = await getUserId();

  return (
    <header className="flex justify-between items-center px-3 py-2 bg-white sticky top-0">
      <section className="flex items-center gap-4 md:gap-9">
        <Link href="/">
          <h1 className="md:text-xl text-[#0868ce] font-bold">Combine Ideas</h1>
        </Link>
        {userId && (
          <nav>
            <ul className="flex gap-6 text-xs sm:text-base md:text-base">
              <li className="hidden md:block">
                <Link href="/" className="hover:text-gray-400">
                  Top
                </Link>
              </li>
              <li>
                <Link href="/favorites" className="hover:text-gray-400">
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </section>
      {userId ? (
        <a
          href="/api/auth/logout"
          className="bg-button hover:bg-button-hover text-white py-1.5 px-3 md:pl-4 md:pr-5 flex items-center gap-1 rounded-lg shadow-sm text-sm md:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="hidden md:block w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <span>Logout</span>
        </a>
      ) : (
        <a
          href="/api/auth/login"
          className="bg-button hover:bg-button-hover text-white py-1.5 px-4 md:px-6 rounded-lg shadow-sm text-sm md:text-base"
        >
          Login
        </a>
      )}
    </header>
  );
}
