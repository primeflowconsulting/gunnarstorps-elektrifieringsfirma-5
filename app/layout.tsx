import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gunnarstorps Elektrifieringsfirma | Professionella eltjänster i Sätila",
  description: "Vi erbjuder professionella eltjänster inklusive solenergi, laddboxar, villainstallation, elrenovering och smart teknik. Över 30 års erfarenhet.",
  keywords: "elektriker, elinstallation, solenergi, laddboxar, villainstallation, elrenovering, smart teknik, Sätila",
  icons: {
    icon: [
      {
        url: '/images/gunnarstorps-logo.png',
        sizes: 'any',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
