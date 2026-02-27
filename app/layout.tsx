import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { Providers } from "./providers"; // Импортируем провайдер

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lotus Boutique",
  description:
    "Качественная косметика от Lotus Boutique. Купите не просто продукт, а качество и настоящую красоту.",
  icons: {
    icon: "/logo.jpg", // файл должен лежать в public/logo.png
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Оборачиваем всё приложение в Providers */}
        <Providers>
          <Header />
          <main>{children}</main>
          <Toaster theme="dark" position="bottom-center" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}