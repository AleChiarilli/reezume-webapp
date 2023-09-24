import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reezume | easy resume generator",
  description: "Kickstart your career with Reezume generator!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="src/app/page.tsx" />
      </head>
      <body className={inter.className}>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
