import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yuval's Website",
  description: "A clean and simple Next.js website",
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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
