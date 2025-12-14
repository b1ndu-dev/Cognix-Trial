import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cognix Notion Clone",
  description: "A Notion clone built by Cognix AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.React-Node;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
