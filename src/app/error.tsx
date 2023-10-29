'use client';

import { useEffect } from 'react';
import type { Metadata } from 'next';
import ScreenMoveButton from './_components/screenMoveButton';

export const metadata: Metadata = {
  title: 'Error | Combine Ideas',
};

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex justify-center px-5 md:px-10 relative top-56">
      <section>
        <h1 className="text-2xl text-center">エラーが発生しました</h1>
        <section className="flex justify-center mt-8">
          <ScreenMoveButton
            href="/"
            title="トップページへ戻る"
            arrowDirection="left"
          />
        </section>
      </section>
    </main>
  );
}
