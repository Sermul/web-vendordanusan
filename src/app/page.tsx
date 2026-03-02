import { dummyVendors } from "@/lib/dummyVendors"
import CategorySection from "@/components/CategorySection"
import DiscountSection from "@/components/DiscountSection"

const categories = [
  { name: "Makanan", slug: "makanan" },
  { name: "Minuman", slug: "minuman" },
  { name: "Snack & Cemilan", slug: "snack" },
  { name: "Merchandise", slug: "merchandise" },
  { name: "Dokumentasi", slug: "dokumentasi" },
  { name: "Perlengkapan Event", slug: "perlengkapan" },
]

export default function Home() {
  return (
    <div className="space-y-20">

      {/* HERO VIDEO */}
      <section className="relative h-[400px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center px-4">
            Vendor Danusan Terbaik Sekitar Kampus
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">

        {categories.map((cat, index) => {
          const filtered = dummyVendors.filter(
            (v) => v.category === cat.slug
          )

          return (
            <div key={cat.slug}>
              <CategorySection
                title={cat.name}
                slug={cat.slug}
                vendors={filtered}
              />

              {/* Diskon muncul setelah kategori pertama */}
              {index === 0 && <DiscountSection />}
            </div>
          )
        })}

      </div>
    </div>
  )
}