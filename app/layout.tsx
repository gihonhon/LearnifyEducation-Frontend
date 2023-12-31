import { ConfettiProvider } from "@/components/providers/confetti-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components/providers/toast-provider";
import ProviderNext from "@/components/providers/next-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learnify",
  description: "Education Platform for student and teacher",
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <ConfettiProvider />
        <ToastProvider />
        <ProviderNext>
          {children}
          <Analytics />
        </ProviderNext>
      </body>
    </html>
  );
}
