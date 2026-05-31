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
    <section className="relative min-h-screen bg-gray-50">
      <AnimatedBackground />

      {/* Banner Full Width */}
      <div className="relative w-full h-[320px] md:h-[600px] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/about_us.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            VenKampus
          </span>

          <h1 className="text-white text-4xl md:text-6xl font-bold max-w-4xl">
            Temukan Vendor Terbaik Untuk Event Kampusmu
          </h1>

          <p className="mt-4 text-white/90 text-base md:text-xl max-w-2xl">
            Cari vendor makanan, minuman, merchandise, dokumentasi,
            dan perlengkapan event dalam satu platform.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Search & Filter */}
        <div className="mb-12">
          <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100">

            <div className="flex flex-col md:flex-row gap-4">

              <Input
                placeholder="Cari vendor..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-14 rounded-2xl flex-1 border-gray-300"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-14 rounded-2xl border border-gray-300 px-5 bg-white min-w-[220px]"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>

            </div>

            <div className="flex flex-wrap gap-4 mt-6">

              <div className="bg-amber-50 px-5 py-3 rounded-xl">
                <p className="text-xs text-gray-500">
                  Vendor Aktif
                </p>
                <p className="text-xl font-bold">
                  {dummyVendors.length}+
                </p>
              </div>

              <div className="bg-amber-50 px-5 py-3 rounded-xl">
                <p className="text-xs text-gray-500">
                  Kategori
                </p>
                <p className="text-xl font-bold">
                  {categories.length - 1}
                </p>
              </div>

              <div className="bg-amber-50 px-5 py-3 rounded-xl">
                <p className="text-xs text-gray-500">
                  Support
                </p>
                <p className="text-xl font-bold">
                  24/7
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Vendor List */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl mb-3">
              😢 Vendor tidak ditemukan
            </p>

            <p className="text-slate-500">
              Coba kata kunci lain atau ubah filter kategori.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}