import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import localFont from 'next/font/local';
import './globals.css';

const primaryFont = localFont({ src: '../utils/roboto.ttf' });

export const metadata = {
  title: 'Faw Flix',
  description: 'Stream your favorite movies and TV shows for free!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} bg-gray-950`}>
        <main className="app">
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
