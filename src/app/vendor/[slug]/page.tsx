"use client"

import { useSearchParams } from "next/navigation"
import { dummyVendors } from "@/lib/dummyVendors"
import VendorCard from "@/components/vendorcard"
import AnimatedBackground from "@/components/AnimatedBackground"

export default function VendorPage() {

  const searchParams = useSearchParams()
  const kategori = searchParams.get("kategori")

  const vendors = kategori
    ? dummyVendors.filter(v => v.category === kategori)
    : dummyVendors

  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-950 text-white">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/70 to-slate-950/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Daftar Vendor</p>
          <h1 className="mt-4 text-5xl font-black capitalize">{kategori ? `Kategori ${kategori}` : "Semua Vendor"}</h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-lg leading-8">
            Jelajahi daftar vendor kampus lengkap dengan kartu interaktif, foto besar, dan kontak langsung via WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {vendors.map((vendor) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      </div>
    </section>
  )
}