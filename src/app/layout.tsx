import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Noto_Sans_JP } from "next/font/google";

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  style: 'normal',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "OTAKA SPACES",
  description: "エンジニア大髙のホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={noto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
