"use client"

import { useSearchParams } from "next/navigation"
import { dummyVendors } from "@/lib/dummyVendors"
import VendorCard from "@/components/vendorcard"

export default function VendorPage() {

  const searchParams = useSearchParams()
  const kategori = searchParams.get("kategori")

  const vendors = kategori
    ? dummyVendors.filter(v => v.category === kategori)
    : dummyVendors

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-10 capitalize">
        {kategori ? `Kategori ${kategori}` : "Semua Vendor"}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {vendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}

      </div>

    </div>
  )
}