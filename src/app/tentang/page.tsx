export default function TentangPage() {
  return (
    <div className="relative overflow-hidden bg-neutralbg text-darktext">

      {/* ================= HERO WITH VIDEO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/video-event.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-white px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Platform Vendor & Dana Usaha Mahasiswa
          </h1>

          <p className="max-w-2xl mx-auto text-lg opacity-90 mb-10">
            Temukan vendor terpercaya untuk event kampus, merchandise,
            dokumentasi, dan kebutuhan dana usaha dalam satu platform modern.
          </p>

          <a
            href="/"
            className="bg-primary px-8 py-4 rounded-full font-semibold hover:scale-110 transition"
          >
            Jelajahi Vendor
          </a>
        </div>
      </section>

      {/* ================= STATISTIK ================= */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          <div>
            <h3 className="text-4xl font-bold text-primary">150+</h3>
            <p className="text-gray-600 mt-2">Vendor Terdaftar</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">500+</h3>
            <p className="text-gray-600 mt-2">Event Terbantu</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-primary">1000+</h3>
            <p className="text-gray-600 mt-2">Mahasiswa Terhubung</p>
          </div>

        </div>
      </section>

      {/* ================= KATEGORI ================= */}
      <section className="py-24 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-primary mb-16">
          Kategori Vendor
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

          {[
            "Merchandise",
            "Dokumentasi",
            "Danusan",
            "Perlengkapan Event"
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-4 transition duration-500 text-center"
            >
              <h3 className="font-semibold text-lg text-primary">
                {item}
              </h3>
            </div>
          ))}

        </div>
      </section>

      {/* ================= CARA KERJA ================= */}
      <section className="py-24 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold text-primary mb-16">
          Cara Kerja Platform
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          {[
            "Cari Vendor",
            "Bandingkan Harga",
            "Hubungi Langsung",
            "Event Sukses"
          ].map((step, i) => (
            <div key={i} className="p-8">
              <div className="text-4xl font-bold text-primary mb-4">
                0{i + 1}
              </div>
              <p className="font-semibold text-gray-700">
                {step}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= VISI MISI ================= */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-2 gap-16">

        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Visi Kami
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Menjadi platform utama mahasiswa dalam menemukan vendor
            terpercaya untuk kebutuhan event dan dana usaha kampus.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-primary mb-6">
            Misi Kami
          </h2>
          <ul className="text-gray-600 space-y-3">
            <li>✔ Menghubungkan mahasiswa dengan vendor terpercaya</li>
            <li>✔ Memberikan transparansi harga</li>
            <li>✔ Mempermudah pencarian vendor</li>
            <li>✔ Mendukung kesuksesan event kampus</li>
          </ul>
        </div>

      </section>

      {/* ================= TESTIMONI ================= */}
      <section className="py-24 bg-gray-50 text-center px-6">
        <h2 className="text-4xl font-bold text-primary mb-16">
          Apa Kata Mereka?
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-md">
            <p className="text-gray-600 mb-4">
              "Platform ini sangat membantu acara himpunan kami.
              Vendor cepat dihubungi dan harga transparan."
            </p>
            <h4 className="font-semibold text-primary">
              Ketua BEM Fakultas
            </h4>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md">
            <p className="text-gray-600 mb-4">
              "Sekarang cari vendor danusan jadi jauh lebih mudah.
              Tidak perlu tanya satu per satu lagi."
            </p>
            <h4 className="font-semibold text-primary">
              Panitia PKKMB
            </h4>
          </div>

        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="py-28 text-center bg-gradient-to-r from-primary to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Membuat Event Kampus Lebih Mudah?
        </h2>

        <p className="mb-10 text-lg opacity-90">
          Temukan vendor terbaik dan wujudkan acara organisasi yang lebih profesional.
        </p>

        <a
          href="/"
          className="bg-white text-primary font-semibold px-10 py-4 rounded-full hover:scale-110 transition duration-300 inline-block"
        >
          Jelajahi Vendor Sekarang
        </a>
      </section>

    </div>
  );
}