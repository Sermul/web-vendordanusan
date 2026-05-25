"use client";

import { useState } from "react";
import VendorCard from "@/components/vendorcard";
import { dummyVendors } from "@/lib/dummyVendors";
import { Input } from "@/components/ui/input";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function DaftarVendor() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");

  const categories = [
    "Semua",
    "Makanan",
    "Minuman",
    "Snack",
    "Merchandise",
    "Dokumentasi",
    "Perlengkapan",
  ];

  const filtered = dummyVendors.filter((vendor) => {
    const matchSearch = vendor.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Semua" ||
      vendor.category.toLowerCase() === category.toLowerCase();

    return matchSearch && matchCategory;
  });

  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-950 text-white">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />Vendor Kampus
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-black tracking-tight">
            Temukan Vendor Kampus yang <span className="text-amber-300">Cepat, Rapi, dan Instagramable</span>
          </h1>
          <p className="mt-6 text-slate-300 text-lg leading-8">
            Cari vendor makanan, minuman, merchandise, dokumentasi, dan perlengkapan event dalam satu platform yang modern dan interaktif.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.75fr_1fr] mb-16">
          <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-2xl shadow-slate-950/50">
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <Input
                placeholder="Cari vendor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-900/90 text-white border-slate-800"
              />
              <div className="relative flex-1">
                <select
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-white outline-none transition focus:border-amber-300"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} className="bg-slate-950 text-white">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`rounded-3xl border px-4 py-3 text-left transition ${
                    category === cat
                      ? "border-amber-300 bg-amber-300/15 text-amber-200"
                      : "border-white/10 bg-white/5 text-slate-200 hover:border-amber-300/40 hover:bg-white/10"
                  }`}
                >
                  <span className="block text-sm font-semibold">{cat}</span>
                  <span className="text-xs text-slate-400">{cat === "Semua" ? "Tampilkan semua" : `Vendor ${cat.toLowerCase()}`}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-amber-400/10 via-white/10 to-slate-900/10 p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200">Statistik Cepat</p>
            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">Vendor Aktif</p>
                <p className="mt-2 text-3xl font-bold text-white">{dummyVendors.length}+</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">Kategori Tersedia</p>
                <p className="mt-2 text-3xl font-bold text-white">7</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <p className="text-sm text-slate-400">Pilihan Mahasiswa</p>
                <p className="mt-2 text-3xl font-bold text-white">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-slate-300">
            <p className="text-2xl mb-3">😢 Vendor tidak ditemukan</p>
            <p className="text-lg">Coba kata kunci lain atau reset filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}