import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Yuval Tal – Staff Engineer & Technical Lead",
  description:
    "Yuval Tal's personal site: engineering leadership, hands-on delivery, and developer experience.",
  openGraph: {
    title: "Yuval Tal – Staff Engineer & Technical Lead",
    description:
      "Yuval Tal's personal site: engineering leadership, hands-on delivery, and developer experience.",
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
