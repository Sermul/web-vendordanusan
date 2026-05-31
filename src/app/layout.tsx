import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });
import "swiper/css";
export const metadata: Metadata = {
  title: "VenKampus",
  description: "Platform cari vendor danusan kampus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-50 text-gray-800`}>
        <NavBar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}