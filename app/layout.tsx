import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/app/components/layout/navigation";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hayo",
  description: "Generated by create next app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <div className="mx-3 mt-12">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
