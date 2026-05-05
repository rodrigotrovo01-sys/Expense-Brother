import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Expenses Brother",
  description: "Sistema de Reembolso Corporativo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${publicSans.variable} font-sans min-h-screen antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
