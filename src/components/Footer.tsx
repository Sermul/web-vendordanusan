"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Facebook, Mail, Phone, ChevronRight } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register") return null;

  return (
    <footer className="bg-gray-900 text-gray-300 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <Link href="/" className="mb-4 inline-block">
            <span className="text-xl font-bold text-white">VenKampus</span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Platform untuk membantu organisasi dan mahasiswa menemukan vendor event kampus secara cepat dan terpercaya.
          </p>
          <Link href="/daftar-jadi-vendor" className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-slate-900 rounded-md text-sm font-semibold hover:opacity-95">
            Daftar Sekarang <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Menu</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>
              <Link href="/" className="hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/daftar-vendor" className="flex items-center gap-2 hover:text-white transition">
                Vendor
              </Link>
            </li>
            <li>
              <Link href="/tentang" className="flex items-center gap-2 hover:text-white transition">
                Tentang
              </Link>
            </li>
          </ul>
        </div>

        {/* Vendor / Resources */}
        <div>
          <h4 className="font-semibold text-white mb-4">Vendor</h4>
          <ul className="text-sm text-gray-400 space-y-3">
            <li>
              <Link href="/daftar-jadi-vendor" className="hover:text-white transition">Daftar Jadi Vendor</Link>
            </li>
            <li>
              <Link href="/daftar-vendor" className="hover:text-white transition">Lihat Semua Vendor</Link>
            </li>
            <li>
              <Link href="/kategori" className="hover:text-white transition">Kategori</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-4">Kontak</h4>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <a href="mailto:admin@danusanmahasiswa.id" className="flex items-center gap-3 hover:text-white transition">
              <Mail className="h-5 w-5 text-amber-300" />
              admin@danusanmahasiswa.id
            </a>

            <a href="https://wa.me/628123456789" className="flex items-center gap-3 hover:text-white transition">
              <Phone className="h-5 w-5 text-green-400" />
              08123456789
            </a>

            <div className="flex items-center gap-3 mt-2">
              <button disabled title="Facebook (inactive)" className="rounded-full bg-white/5 p-2 text-blue-500">
                <Facebook className="h-5 w-5" />
              </button>
              <button disabled title="Instagram (inactive)" className="rounded-full bg-white/5 p-2 text-pink-500">
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Danusan Mahasiswa. All rights reserved.
      </div>
    </footer>
  );
}
