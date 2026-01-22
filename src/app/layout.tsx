import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar import
import Footer from "@/components/Footer"; // Footer import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen SaaS",
  description: "AI Powered Growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />  {/* Ye har page par dikhega */}
        {children}  {/* Ye beech ka content (Home, Pricing, etc) */}
        <Footer />  {/* Ye har page ke end me dikhega */}
      </body>
    </html>
  );
}