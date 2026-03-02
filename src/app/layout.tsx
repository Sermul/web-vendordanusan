import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import FloatingButtons from "../components/FloatingButtons";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Danusan Mahasiswa",
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
        {/* NAVBAR */}
        <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
             <span className="text-primary">Danusan</span>
              <span className="text-gray-900">Mahasiswa</span>
            </Link>

           <nav className="hidden md:flex gap-8 text-gray-600 items-center">
  <Link href="/" className="hover:text-primary transition-colors">
    Home
  </Link>
  <Link href="/daftar-vendor" className="hover:text-primary transition-colors">
    Vendor
  </Link>
  <Link href="/tentang" className="hover:text-primary transition-colors">
    Tentang
  </Link>
</nav>

            <div className="flex gap-3">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
               <Button className="bg-primary hover:opacity-90">
                  Register
                </Button>
              </Link>
            </div>
            {/* MOBILE MENU BUTTON */}
<button className="md:hidden">
  ☰
</button>
          </div>
        </header>

        <main>{children}</main>

       {/* FOOTER */}
<footer className="bg-gray-900 text-gray-300 mt-24">
  <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-4 gap-12">

    {/* BRAND */}
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">
        DanusanMahasiswa
      </h3>
      <p className="text-sm leading-relaxed text-gray-400">
        Platform digital untuk membantu organisasi mahasiswa menemukan vendor terbaik
        secara cepat, transparan, dan terpercaya.
      </p>
    </div>

    {/* MENU */}
    <div>
      <h4 className="font-semibold text-white mb-6 text-lg">Menu</h4>
      <ul className="space-y-3 text-sm text-gray-400">
        <li><Link href="/" className="hover:text-white transition">Home</Link></li>
        <li><Link href="/daftar-vendor" className="hover:text-white transition">Vendor</Link></li>
        <li><Link href="/tentang" className="hover:text-white transition">Tentang</Link></li>
      </ul>
    </div>

    {/* VENDOR */}
    <div>
      <h4 className="font-semibold text-white mb-6 text-lg">Vendor</h4>
      <ul className="space-y-3 text-sm text-gray-400">
        <li><Link href="/daftar-jadi-vendor" className="hover:text-white transition">Daftar Jadi Vendor</Link></li>
      </ul>
    </div>

    {/* KONTAK + SOSIAL MEDIA */}
    <div>
      <h4 className="font-semibold text-white mb-6 text-lg">Kontak</h4>
      <div className="space-y-3 text-sm text-gray-400">
        <p>Email: admin@danusanmahasiswa.id</p>
        <p>WhatsApp: 08123456789</p>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex gap-4 mt-6 text-xl">
        <a href="#" className="hover:text-white transition">🌐</a>
        <a href="#" className="hover:text-white transition">📸</a>
        <a href="#" className="hover:text-white transition">🐦</a>
        <a href="#" className="hover:text-white transition">💼</a>
      </div>
    </div>

  </div>

  <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-500">
    © {new Date().getFullYear()} Danusan Mahasiswa. All rights reserved.
  </div>
</footer>
<FloatingButtons />
      </body>
    </html>
  );
}