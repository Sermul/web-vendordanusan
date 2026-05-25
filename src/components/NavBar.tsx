"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname()
  const hide = pathname === "/login" || pathname === "/register"

  function close() {
    setOpen(false);
  }

  return (
    <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          <span className="text-primary">Ven</span>
          <span className="text-gray-900">Kampus</span>
        </Link>

        {!hide && (
          <>
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

            <div className="hidden md:flex gap-3">
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button className="bg-primary hover:opacity-90">Register</Button>
              </Link>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                aria-label="Buka menu"
                aria-expanded={open}
                onClick={() => setOpen((s) => !s)}
                className="text-2xl px-3 py-2 rounded-md"
              >
                ☰
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile overlay menu */}
      {open && !hide && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={close} />

          <div className="absolute top-0 left-0 right-0 bg-white shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <Link href="/" onClick={close} className="text-xl font-bold">
                <span className="text-primary">Ven</span>
                <span className="text-gray-900">Kampus</span>
              </Link>
              <button aria-label="Tutup menu" onClick={close} className="text-2xl">×</button>
            </div>

            <nav className="flex flex-col gap-4">
              <Link href="/" onClick={close} className="text-gray-700 font-medium">Home</Link>
              <Link href="/daftar-vendor" onClick={close} className="text-gray-700 font-medium">Vendor</Link>
              <Link href="/tentang" onClick={close} className="text-gray-700 font-medium">Tentang</Link>
              <Link href="/daftar-jadi-vendor" onClick={close} className="text-gray-700 font-medium">Daftar Jadi Vendor</Link>
            </nav>

            <div className="mt-6 flex gap-3">
              <Link href="/login" onClick={close} className="flex-1">
                <Button variant="outline" className="w-full">Login</Button>
              </Link>
              <Link href="/register" onClick={close} className="flex-1">
                <Button className="w-full bg-primary">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
