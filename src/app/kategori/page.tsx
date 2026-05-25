import { dummyVendors } from "@/lib/dummyVendors"
import { Vendor } from "@/types/vendor"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import AnimatedBackground from "@/components/AnimatedBackground"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const vendors: Vendor[] = dummyVendors.filter(
    (v) => v.category === params.slug
  )

  if (vendors.length === 0) return notFound()

  return (
    <section className="relative overflow-hidden py-24 px-6 bg-slate-950 text-white min-h-screen">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/75 to-slate-950/95" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-12 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Kategori</p>
          <h1 className="mt-4 text-5xl font-black capitalize">{params.slug}</h1>
          <p className="mt-4 max-w-2xl text-slate-300 text-lg leading-8">
            Lihat vendor terpilih pada kategori <span className="font-semibold text-white">{params.slug}</span>. Semuanya siap melayani acara kampusmu dengan harga terbaik dan pelayanan cepat.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {vendors.map((vendor) => (
            <Link key={vendor.id} href={`/vendor/${vendor.slug}`}>
              <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-2xl transition-transform duration-300 hover:-translate-y-3 hover:bg-white/10">
                <div className="relative overflow-hidden">
                  <Image
                    src={vendor.photo_url}
                    alt={vendor.name}
                    width={400}
                    height={250}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4">
                    <p className="text-sm text-slate-300">{vendor.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{vendor.name}</h3>
                  <p className="mt-3 text-slate-300 line-clamp-3">{vendor.description}</p>
                  <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                    <span>{vendor.price}</span>
                    <span>{vendor.min_order}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-between items-center gap-4 rounded-[28px] border border-white/10 bg-white/5 p-6 text-slate-300 shadow-2xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Ingin Jelajahi Semua Vendor?</p>
            <p className="mt-2 text-base text-slate-200">Cek seluruh daftar vendor di platform untuk pilihan yang lebih lengkap.</p>
          </div>
          <Link href="/vendor" className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-amber-300">
            Semua Vendor
          </Link>
        </div>
      </div>
    </section>
  )
}