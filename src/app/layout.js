import { Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const OutfitFont = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixgen",
  description: "PixGen is a global image store",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme='light'
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="container mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
