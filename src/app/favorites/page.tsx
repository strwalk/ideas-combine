import { redirect } from 'next/navigation';
import { getUserId } from '../_lib/auth';
import prisma from '../_lib/connectToPrisma';
import { findWord } from '../_utils';
import ScreenMoveButton from '../_components/screenMoveButton';
import DeleteButton from './deleteButton';

export const dynamic = 'force-dynamic';

export default async function Favorites() {
  const userId = await getUserId();
  if (!userId) {
    redirect('/');
  }

  const ideasList = await prisma.ideas.findMany({
    where: {
      user_id: userId,
    },
    select: {
      id: true,
      word1_id: true,
      word2_id: true,
    },
  });

  return (
    <main className="flex justify-center pt-5 pb-20">
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
                        <td>{findWord(idea.word1_id)}</td>
                        <td>{findWord(idea.word2_id)}</td>
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
              <ScreenMoveButton
                href="/"
                title="Top Page"
                arrowDirection="left"
              />
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
