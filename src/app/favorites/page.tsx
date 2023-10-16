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
    <main className="flex justify-center py-20 min-h-screen">
      <section className="w-[50rem]">
        <section className="flex justify-center">
          <section className="text-center w-full">
            <h1 className="text-2xl">保存リスト</h1>
            <section className="mt-10">
              <table className="w-full text-lg">
                <tbody>
                  {ideasList.map((idea, index) => (
                    <tr
                      key={idea.id}
                      className="border-b border-x first:border-t border-gray-500"
                    >
                      <td className="py-4">{index + 1}</td>
                      <td>{idea.word1.word}</td>
                      <td>{idea.word2.word}</td>
                      <td>
                        <DeleteButton ideaId={idea.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
        </section>
      </section>
    </main>
  );
}
