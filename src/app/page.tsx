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

      <section className="relative w-full h-[350px] md:h-[650px] overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="about_us.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/50" />

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

    <span className="bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-semibold mb-6">
      VenKampus
    </span>

    <h1 className="text-white text-4xl md:text-7xl font-bold leading-tight max-w-5xl">
      Solusi Vendor untuk
      <br />
      Event & Dana Usaha Kampus
    </h1>

    <p className="text-gray-200 mt-6 mb-8 max-w-3xl text-lg md:text-xl">
      Temukan makanan, minuman, merchandise, dokumentasi,
      hingga perlengkapan event untuk kebutuhan organisasi kampusmu.
    </p>

    <div className="flex gap-4 flex-wrap justify-center">
      <Link
        href="#kategori"
        className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
      >
        Jelajahi Vendor
      </Link>

      <Link
        href="/daftar-jadi-vendor"
        className="bg-amber-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
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
            <div className="relative bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-6 text-left overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-amber-100 text-amber-700 w-12 h-12 flex items-center justify-center">🍽️</div>
                <div>
                  <h3 className="text-lg font-semibold">Vendor Terverifikasi</h3>
                  <p className="text-sm text-gray-600">Semua vendor lewat seleksi kualitas dan layanan.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Kami verifikasi keandalan vendor supaya eventmu berjalan lancar tanpa kejutan.</p>
              <div className="text-sm font-medium text-amber-600">Cocok untuk acara skala kecil → besar</div>
              <div className="absolute -right-8 -top-8 opacity-20">
                <svg width="140" height="140" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="#FDE68A" />
                </svg>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-6 text-left overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-amber-100 text-amber-700 w-12 h-12 flex items-center justify-center">📍</div>
                <div>
                  <h3 className="text-lg font-semibold">Dekat dengan Kampus</h3>
                  <p className="text-sm text-gray-600">Vendor berfokus di area kampus, cepat dan hemat waktu.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Pilihan lokasi optimal meminimalisir ongkos kirim dan waktu tunggu.</p>
              <div className="text-sm font-medium text-amber-600">Akses mudah untuk panitia kampus</div>
              <div className="absolute -left-8 -bottom-8 opacity-20">
                <svg width="140" height="140" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="6" y="6" width="52" height="52" rx="10" fill="#FFF7ED" />
                </svg>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-6 text-left overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-amber-100 text-amber-700 w-12 h-12 flex items-center justify-center">💸</div>
                <div>
                  <h3 className="text-lg font-semibold">Harga Ramah Mahasiswa</h3>
                  <p className="text-sm text-gray-600">Paket dan diskon khusus untuk organisasi mahasiswa.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Negosiasi paket, diskon kuantitas, dan opsi cicilan untuk event besar.</p>
              <div className="text-sm font-medium text-amber-600">Hemat anggaran, tetap berkualitas</div>
              <div className="absolute right-2 top-2 opacity-10">
                <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 32h48" stroke="#FDE68A" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-white to-yellow-50 rounded-3xl p-6 text-left overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-amber-100 text-amber-700 w-12 h-12 flex items-center justify-center">💬</div>
                <div>
                  <h3 className="text-lg font-semibold">Hubungi Langsung</h3>
                  <p className="text-sm text-gray-600">Chat langsung ke vendor, cepat atur konfirmasi dan detail.</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">Integrasi kontak langsung mempercepat komunikasi tanpa perlu platform tambahan.</p>
              <div className="text-sm font-medium text-amber-600">Praktis dan efisien</div>
              <div className="absolute -right-8 -top-8 opacity-10">
                <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="#FFF7ED" />
                </svg>
              </div>
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