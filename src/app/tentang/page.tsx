export default function TentangPage() {
  return (
    <div className="relative overflow-hidden bg-neutralbg text-darktext">

      {/* FLOATING BACKGROUND BLUR */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-60 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>

      {/* HERO */}
      <section className="relative py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary to-indigo-500 text-transparent bg-clip-text animate-fadeIn">
          Tentang Danusan Mahasiswa
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-600 animate-fadeIn delay-200">
          Platform digital yang membantu mahasiswa menemukan vendor danusan terpercaya 
          dengan cepat, transparan, dan tanpa ribet.
        </p>
      </section>

      {/* MARQUEE TEXT */}
     <div className="overflow-hidden bg-primary text-white py-4">
  <div className="marquee whitespace-nowrap text-2xl font-semibold">
    INOVATIF • TERPERCAYA • PROFESIONAL • CEPAT • BERKUALITAS • 
    INOVATIF • TERPERCAYA • PROFESIONAL • CEPAT • BERKUALITAS • 
  </div>
</div>

      {/* KOTAK KEUNGGULAN */}
      <section className="max-w-6xl mx-auto py-24 px-6 grid md:grid-cols-3 gap-10">

        {[
          {
            title: "Vendor Terverifikasi",
            desc: "Semua vendor melalui proses kurasi untuk memastikan kualitas terbaik."
          },
          {
            title: "Harga Transparan",
            desc: "Tidak ada biaya tersembunyi, semua informasi jelas dan terbuka."
          },
          {
            title: "Proses Super Cepat",
            desc: "Temukan vendor hanya dalam beberapa klik tanpa ribet."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="group relative p-10 rounded-3xl bg-white shadow-md hover:shadow-2xl hover:-translate-y-4 transition duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <h3 className="text-xl font-bold mb-4 text-primary relative z-10">
              {item.title}
            </h3>
            <p className="text-gray-600 relative z-10">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* STORY SECTION */}
      <section className="bg-white py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">
          Kenapa Kami Membuat Ini?
        </h2>

        <p className="max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Kami melihat banyak organisasi mahasiswa kesulitan mencari vendor untuk acara kampus.
          Informasi tersebar, harga tidak jelas, dan proses memakan waktu.
          Danusan Mahasiswa hadir untuk menyederhanakan semuanya dalam satu platform.
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="py-28 text-center bg-gradient-to-r from-primary to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white,transparent)]"></div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Memulai Danusan Kamu?
        </h2>

        <p className="mb-10 text-lg opacity-90">
          Jelajahi vendor terbaik dan buat acara kampusmu lebih mudah & sukses.
        </p>

        <a
          href="/daftar-vendor"
          className="bg-white text-primary font-semibold px-10 py-4 rounded-full hover:scale-110 transition duration-300 inline-block"
        >
          Jelajahi Vendor
        </a>
      </section>
    </div>
  );
}