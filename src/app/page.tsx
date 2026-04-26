import Link from "next/link"
import { dummyVendors } from "@/lib/dummyVendors"
import CategorySection from "@/components/CategorySection"
import DiscountSection from "@/components/DiscountSection"
import SafeMapView from "@/components/ui/SafeMapView"

const categories = [
  { name: "Makanan", slug: "makanan" },
  { name: "Minuman", slug: "minuman" },
  { name: "Snack & Cemilan", slug: "snack" },
  { name: "Merchandise", slug: "merchandise" },
  { name: "Dokumentasi", slug: "dokumentasi" },
  { name: "Perlengkapan Event", slug: "perlengkapan" },
]

export default function Home() {
  const discountVendors = dummyVendors.filter(v => v.discount)
  const featuredVendor = dummyVendors[0]

  return (
    <div className="space-y-24">

      {/* ================= HERO ================= */}
      <section className="relative h-[500px] overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/60 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Solusi Vendor untuk <br /> Event & Dana Usaha Kampus
          </h1>

          <p className="text-gray-200 mb-8 max-w-2xl text-lg">
            Temukan makanan, minuman, merchandise, dokumentasi, hingga perlengkapan event 
            untuk kebutuhan organisasi kampusmu dalam satu platform.
          </p>

          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="#kategori"
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Jelajahi Vendor
            </Link>

            <Link
              href="/daftar-jadi-vendor"
              className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 transition"
            >
              Daftar Jadi Vendor
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <h2 className="text-3xl font-bold">150+</h2>
          <p className="text-gray-600">Vendor Terdaftar</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">500+</h2>
          <p className="text-gray-600">Event Kampus Terlayani</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">98%</h2>
          <p className="text-gray-600">Rating Positif</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold">24/7</h2>
          <p className="text-gray-600">Respon Cepat</p>
        </div>
      </section>

      {/* ================= KENAPA PILIH KAMI ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-12">
            Kenapa Mahasiswa Pilih Platform Ini?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

  {/* CARD 1 */}
  <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition">
    <img 
      src="/vendor.png" 
      alt="Vendor"
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <h3 className="text-lg font-semibold">Vendor Terverifikasi</h3>
    <p className="text-sm text-gray-600">
      Vendor telah melalui proses seleksi untuk menjamin kualitas dan profesionalitas.
    </p>
  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition">
    <img 
      src="/kampus.png" 
      alt="Kampus"
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <h3 className="text-lg font-semibold">Sekitar Kampus</h3>
    <p className="text-sm text-gray-600">
      Fokus vendor di area kampus agar mudah diakses dan cepat dihubungi.
    </p>
  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition">
    <img 
      src="/harga.png" 
      alt="Harga"
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <h3 className="text-lg font-semibold">Harga Mahasiswa</h3>
    <p className="text-sm text-gray-600">
      Paket khusus organisasi dan pembelian dalam jumlah besar.
    </p>
  </div>

  {/* CARD 4 */}
  <div className="bg-white rounded-2xl shadow-md p-4 text-center hover:scale-105 transition">
    <img 
      src="/wa.png" 
      alt="WA"
      className="w-full h-40 object-cover rounded-xl mb-4"
    />
    <h3 className="text-lg font-semibold">Terhubung Langsung</h3>
    <p className="text-sm text-gray-600">
      Langsung chat vendor via WhatsApp tanpa ribet.
    </p>
  </div>

</div>
        </div>
      </section>

     {/* ================= FEATURED VENDOR ================= */}
<section className="max-w-6xl mx-auto px-6">
  <h2 className="text-3xl font-bold mb-10 text-center">
    Vendor Pilihan Minggu Ini
  </h2>

  <div className="relative">

    {/* Card */}
    <div className="bg-white rounded-2xl shadow-xl p-10 text-center hover:shadow-2xl transition">
      <h3 className="text-2xl font-bold mb-3">
        {featuredVendor.name}
      </h3>
      <p className="text-gray-600 mb-6">
        {featuredVendor.description}
      </p>
      <Link
        href={`/vendor/${featuredVendor.slug}`}
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
      >
        Lihat Detail
      </Link>
    </div>

    {/* Karakter duduk di pinggir bawah kanan card */}
    <div className="hidden md:block animate-float absolute -bottom-16 right-6">
      <img
        src="/student-character.png"
        alt="Student Character"
        className="w-72 h-72 object-contain"
      />
    </div>

  </div>
</section>
      {/* ================= KATEGORI ================= */}
      <div id="kategori" className="max-w-7xl mx-auto px-6 space-y-24">
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
             {index === 0 && (
  <DiscountSection vendors={discountVendors} />
)}
            </div>
          )
        })}
      </div>

      {/* ================= MAP ================= */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Lokasi Vendor Sekitar Kampus
        </h2>
        <SafeMapView vendors={dummyVendors} />
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-yellow-500 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Punya Usaha untuk Event Kampus?
        </h2>
        <p className="mb-8 text-lg">
          Bergabunglah dan jangkau lebih banyak organisasi mahasiswa.
        </p>
        <Link
          href="/daftar-jadi-vendor"
          className="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Daftar Sekarang
        </Link>
      </section>

    </div>
  )
}