import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans } from "next/font/google"

// Initialize the font
const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Belajar bahasa inggris",
  description: "Belajar bahasa inggris dengan mudah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} ${openSans.className} antialiased bg-green-500`}
      >
        {children}
      </body>
    </html>
  );
}
