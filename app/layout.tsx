import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Yuval Tal – Final-Year Computer Science Student",
  description:
    "Yuval Tal's personal site: final-year Computer Science student (GPA 90) seeking a student software development position in backend or full-stack.",
  openGraph: {
    title: "Yuval Tal – Final-Year Computer Science Student",
    description:
      "Final-year Computer Science student with strong foundations in algorithms, data structures, and software engineering, looking for a student developer role.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
