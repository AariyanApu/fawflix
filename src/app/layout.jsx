import NavBar from '@/component/NavBar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Faw Flix',
  description: 'Stream your favorite movies and TV shows for free!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
