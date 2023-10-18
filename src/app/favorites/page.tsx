import Link from 'next/link';
import prisma from '../_lib/connectToPrisma';
import DeleteButton from './deleteButton';

export const dynamic = 'force-dynamic';

export default async function Favorites() {
  const ideasList = await prisma.ideas.findMany({
    where: {
      user_id: 'A001',
    },
    select: {
      id: true,
      word1: {
        select: {
          word: true,
        },
      },
      word2: {
        select: {
          word: true,
        },
      },
    },
  });

  return (
    <main className="flex justify-center py-20 min-h-screen bg-back">
      <section className="w-full md:w-[40rem] lg:w-[50rem] bg-white pt-12 pb-10 px-4 sm:px-10 rounded-xl shadow-md mx-4 sm:mx-8">
        <section className="flex justify-center">
          <section className="text-center w-full">
            <h1 className="md:text-xl lg:text-2xl">Favorites List</h1>
            <section className="mt-5 md:mt-8 lg:mt-10">
              {ideasList.length > 0 ? (
                <table className="w-full rounded-xl text-sm sm:text-base">
                  <tbody>
                    {ideasList.map((idea, index) => (
                      <tr
                        key={idea.id}
                        className="border-b border-x first:border-t border-gray-200"
                      >
                        <td className="py-3 pl-2">{index + 1}</td>
                        <td>{idea.word1.word}</td>
                        <td>{idea.word2.word}</td>
                        <td>
                          <div className="flex justify-center">
                            <DeleteButton ideaId={idea.id} />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>保存したアイデアはありません</p>
              )}
            </section>
            <section className="flex justify-center mt-6">
              <Link
                href="/"
                className="border border-gray-400 hover:bg-gray-50 py-2 px-6 flex items-center gap-1 text-sm sm:text-base lg:text-lg"
              >
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
                <span>Top Page</span>
              </Link>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
