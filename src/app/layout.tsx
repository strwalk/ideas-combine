import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Header from './_components/header';
import Footer from './_components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Combine Ideas',
  description: 'Combine Ideas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${inter.className} min-h-screen bg-back relative`}>
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
