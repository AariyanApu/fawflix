import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";
import localFont from "next/font/local";
import "./globals.css";

const primaryFont = localFont({ src: "../utils/roboto.ttf" });

export const metadata = {
  title: "Faw Flix",
  description: "Stream your favorite movies and TV shows for free!",
  metadataBase: new URL("https://fawflix.vercel.app"),
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${primaryFont.className} bg-gray-950`}>
        <Provider>
          <main className="app">
            <NavBar />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  );
}
