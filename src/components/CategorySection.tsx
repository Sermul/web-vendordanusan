"use client"

import Link from "next/link"
import VendorCard from "./vendorcard"

interface Props {
  title: string
  slug: string
  vendors: any[]
}

export default function CategorySection({ title, slug, vendors }: Props) {
  if (!vendors.length) return null

  return (
    <section className="mb-20">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">
          {title}
        </h2>

 <Link href={`/vendor?kategori=${slug}`}>
  Lihat Lainnya
</Link>
      </div>

      {/* HORIZONTAL SCROLL */}
      <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">

        {vendors.map((vendor) => (
          <div
            key={vendor.id}
            className="min-w-[280px] flex-shrink-0"
          >
            <VendorCard vendor={vendor} />
          </div>
        ))}

      </div>
    </section>
  )
}