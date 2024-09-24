import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import '@mantine/core/styles.css';
import { createTheme, MantineProvider, ColorSchemeScript } from '@mantine/core';
import ContactSection from "@/components/layouts/Contact/ContactSection";

const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  /** Put your mantine theme override here */
});

export const metadata: Metadata = {
  title: "OTAKA SPACE",
  description: "エンジニア大髙のホームページです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <Header />
          <MantineProvider theme={theme}>
            {children}
            <ContactSection />
          </MantineProvider>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
