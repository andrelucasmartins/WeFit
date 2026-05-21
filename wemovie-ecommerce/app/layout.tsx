import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Open_Sans } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const openSans = Open_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WeMovies | %s",
  description: "Ecommerce de filmes para os amantes da sétima arte.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(openSans.variable, "font-sans", geist.variable)}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col dark">
        <Header />
        {children}
      </body>
    </html>
  );
}
