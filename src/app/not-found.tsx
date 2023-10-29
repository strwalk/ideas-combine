import type { Metadata } from 'next';
import ScreenMoveButton from './_components/screenMoveButton';

export const metadata: Metadata = {
  title: 'Not Found | Combine Ideas',
};

export default function NotFound() {
  return (
    <main className="flex justify-center px-5 md:px-10 relative top-56">
      <section>
        <section className="text-center">
          <h1 className="text-2xl">
            お探しのページは
            <br className="sm:hidden" />
            見つかりませんでした
          </h1>
          <p className="text-sm md:text-base mt-3">
            移動または削除された可能性があります
          </p>
        </section>
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
