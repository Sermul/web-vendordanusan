"use client";

import { useState } from "react";
import VendorCard from "@/components/vendorcard";
import { dummyVendors } from "@/lib/dummyVendors";
import { Input } from "@/components/ui/input";

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
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Daftar Vendor Danusan
      </h1>

      {/* SEARCH + FILTER */}
      <div className="flex flex-col md:flex-row gap-4 mb-12">
        <Input
          placeholder="Cari vendor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border rounded-lg px-4 py-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* LIST */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl mb-2">😢 Vendor tidak ditemukan</p>
          <p>Coba kata kunci lain</p>
        </div>
      )}
    </section>
  );
}