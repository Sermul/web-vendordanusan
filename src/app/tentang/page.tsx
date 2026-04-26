"use client"

import { useEffect, useRef } from "react"

/* ── Scroll-reveal hook ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal], [data-stagger]")
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed")
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const TESTIMONIALS = [
  { quote: "Platform ini sangat membantu acara himpunan kami. Vendor cepat dihubungi dan harga transparan.", name: "Ketua BEM Fakultas", univ: "Universitas Brawijaya", initial: "K" },
  { quote: "Sekarang cari vendor danusan jadi jauh lebih mudah. Tidak perlu tanya-tanya satu per satu lagi.", name: "Panitia PKKMB", univ: "ITS Surabaya", initial: "P" },
  { quote: "Kami berhasil dapat vendor merchandise berkualitas dengan harga bersahabat untuk 300 peserta!", name: "Ketua Himpunan Teknik", univ: "Universitas Airlangga", initial: "H" },
  { quote: "Vendor dokumentasi yang kami temukan lewat platform ini benar-benar profesional dan tepat waktu.", name: "Koordinator Acara", univ: "UNESA Surabaya", initial: "A" },
  { quote: "Sangat praktis! Dalam 10 menit sudah bisa hubungi 3 vendor sekaligus dan bandingkan harganya.", name: "Panitia Festival Kampus", univ: "Universitas Jember", initial: "F" },
  { quote: "Vendor sound system yang kami pesan sangat memuaskan. Rekomen banget buat event skala besar!", name: "Sie Perlengkapan BEM", univ: "Politeknik Negeri Malang", initial: "S" },
]

const KATEGORI = [
  {
    label: "Makanan",
    sub: "Ayam geprek, nasi box, catering & konsumsi event",
    num: "01",
    accent: "#f59e0b",
    count: "10+ Vendor",
    photo: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=120&h=120&fit=crop&q=80",
    contoh: ["Ayam Geprek Kampus", "Nasi Box Organisasi", "Catering Mahasiswa"],
    harga: "Mulai Rp 5.000 / pcs",
    href: "/?category=makanan",
  },
  {
    label: "Minuman",
    sub: "Es teh, kopi, jus, boba & booth minuman kekinian",
    num: "02",
    accent: "#3b82f6",
    count: "7+ Vendor",
    photo: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=120&h=120&fit=crop&q=80",
    contoh: ["Es Teh Jumbo", "Booth Kopi Mahasiswa", "Minuman Kekinian Kampus"],
    harga: "Mulai Rp 3.000 / pcs",
    href: "/?category=minuman",
  },
  {
    label: "Snack",
    sub: "Gorengan, donat, roti bakar, piscok & cemilan kampus",
    num: "03",
    accent: "#10b981",
    count: "7+ Vendor",
    photo: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=120&h=120&fit=crop&q=80",
    contoh: ["Snack Box Hemat", "Donat Kentang Empuk", "Cemilan Goreng Kampus"],
    harga: "Mulai Rp 2.000 / pcs",
    href: "/?category=snack",
  },
  {
    label: "Merchandise",
    sub: "Kaos, hoodie, topi, lanyard & goodie bag event",
    num: "04",
    accent: "#8b5cf6",
    count: "7+ Vendor",
    photo: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=120&h=120&fit=crop&q=80",
    contoh: ["Kaos Event Custom", "Hoodie Custom Kampus", "Lanyard & ID Card"],
    harga: "Mulai Rp 1.000 / pcs",
    href: "/?category=merchandise",
  },
  {
    label: "Dokumentasi",
    sub: "Foto, video, drone, live streaming & photobooth",
    num: "05",
    accent: "#ef4444",
    count: "7+ Vendor",
    photo: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=120&h=120&fit=crop&q=80",
    contoh: ["Fotografer Kampus Pro", "Aftermovie Cinematic", "Drone Video Event"],
    harga: "Mulai Rp 500.000 / event",
    href: "/?category=dokumentasi",
  },
  {
    label: "Perlengkapan",
    sub: "Sound system, panggung, tenda, kursi & dekorasi",
    num: "06",
    accent: "#f97316",
    count: "7+ Vendor",
    photo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=120&h=120&fit=crop&q=80",
    contoh: ["Sewa Tenda & Sound", "Panggung Portable", "Backdrop & Banner"],
    harga: "Mulai Rp 500.000 / paket",
    href: "/?category=perlengkapan",
  },
]

const CARA_KERJA = [
  {
    step: "01",
    title: "Pilih Kategori",
    desc: "Tentukan kebutuhan event-mu: makanan, minuman, snack, merchandise, dokumentasi, atau perlengkapan acara.",
    detail: "6 kategori tersedia",
    icon: "◈",
  },
  {
    step: "02",
    title: "Filter & Cari",
    desc: "Gunakan filter lokasi, rating, dan harga untuk menemukan vendor yang paling sesuai kebutuhanmu.",
    detail: "150+ vendor aktif",
    icon: "⊞",
  },
  {
    step: "03",
    title: "Lihat Detail",
    desc: "Cek portofolio, harga transparan, minimum order, jarak ke kampus, dan ulasan dari pengguna lain.",
    detail: "Rating terverifikasi",
    icon: "◎",
  },
  {
    step: "04",
    title: "Hubungi via WA",
    desc: "Klik tombol WhatsApp dan langsung negosiasi dengan vendor. Tanpa perantara, tanpa biaya tambahan.",
    detail: "0% komisi platform",
    icon: "◌",
  },
]

export default function TentangPage() {
  useReveal()

  /* ── Draggable carousel ── */
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDragging.current = true
      track.style.cursor = "grabbing"
      startX.current = ("touches" in e ? e.touches[0].pageX : e.pageX) - track.offsetLeft
      scrollLeft.current = track.scrollLeft
      if (autoTimer.current) clearInterval(autoTimer.current)
    }
    const onUp = () => {
      isDragging.current = false
      track.style.cursor = "grab"
      startAuto()
    }
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = ("touches" in e ? e.touches[0].pageX : e.pageX) - track.offsetLeft
      track.scrollLeft = scrollLeft.current - (x - startX.current) * 1.5
    }

    const startAuto = () => {
      autoTimer.current = setInterval(() => {
        if (!track) return
        track.scrollLeft += 1
        if (track.scrollLeft >= track.scrollWidth / 2) track.scrollLeft = 0
      }, 20)
    }

    track.addEventListener("mousedown", onDown)
    track.addEventListener("touchstart", onDown, { passive: true })
    window.addEventListener("mouseup", onUp)
    window.addEventListener("touchend", onUp)
    track.addEventListener("mousemove", onMove)
    track.addEventListener("touchmove", onMove, { passive: false })
    startAuto()

    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current)
      track.removeEventListener("mousedown", onDown)
      track.removeEventListener("touchstart", onDown)
      window.removeEventListener("mouseup", onUp)
      window.removeEventListener("touchend", onUp)
      track.removeEventListener("mousemove", onMove)
      track.removeEventListener("touchmove", onMove)
    }
  }, [])

  return (
    <>
      <style>{`
        /* ── Reveal base ── */
        [data-reveal] { opacity: 0; transform: translateY(36px); transition: opacity 0.7s ease, transform 0.7s ease; }
        [data-reveal="left"] { transform: translateX(-48px); }
        [data-reveal="right"] { transform: translateX(48px); }
        [data-reveal="scale"] { transform: scale(0.88); }
        .revealed { opacity: 1 !important; transform: none !important; }

        /* stagger children */
        [data-stagger] > * { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        [data-stagger].revealed > *:nth-child(1) { opacity:1; transform:none; transition-delay:0s; }
        [data-stagger].revealed > *:nth-child(2) { opacity:1; transform:none; transition-delay:0.1s; }
        [data-stagger].revealed > *:nth-child(3) { opacity:1; transform:none; transition-delay:0.2s; }
        [data-stagger].revealed > *:nth-child(4) { opacity:1; transform:none; transition-delay:0.3s; }
        [data-stagger].revealed > *:nth-child(5) { opacity:1; transform:none; transition-delay:0.4s; }
        [data-stagger].revealed > *:nth-child(6) { opacity:1; transform:none; transition-delay:0.5s; }

        /* ── Hero text animation ── */
        @keyframes fadeUp { from { opacity:0; transform:translateY(40px); } to { opacity:1; transform:none; } }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        @keyframes slideRight { from { width:0 } to { width:100% } }
        .hero-badge { animation: fadeIn 0.8s ease 0.2s both; }
        .hero-h1-1  { animation: fadeUp 0.9s ease 0.4s both; }
        .hero-h1-2  { animation: fadeUp 0.9s ease 0.6s both; }
        .hero-p     { animation: fadeUp 0.9s ease 0.8s both; }
        .hero-btns  { animation: fadeUp 0.9s ease 1s both; }

        /* ── Ticker / marquee ── */
        @keyframes ticker { from { transform:translateX(0) } to { transform:translateX(-50%) } }
        .ticker-track { display:flex; width:max-content; animation: ticker 28s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }

        /* ── Number count pulse ── */
        @keyframes numPop { 0%,100%{transform:scale(1)} 50%{transform:scale(1.06)} }
        .num-pop { animation: numPop 3s ease-in-out infinite; }

        /* ── Card hover lift ── */
        .card-lift { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .card-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }

        /* ── Underline draw ── */
        .draw-line { position:relative; display:inline-block; }
        .draw-line::after { content:''; position:absolute; bottom:-4px; left:0; height:3px; width:0; background:#f59e0b; border-radius:2px; transition:width 0.5s ease; }
        .draw-line:hover::after, .revealed .draw-line::after { width:100%; transition-delay:0.3s; }

        /* Carousel */
        .carousel-track { cursor:grab; overflow-x:scroll; scrollbar-width:none; -webkit-overflow-scrolling:touch; }
        .carousel-track::-webkit-scrollbar { display:none; }

        /* ── Kategori card ── */
        .kategori-card { overflow: hidden; }
        .kategori-card .kcat-photo { transition: transform 0.6s ease; }
        .kategori-card:hover .kcat-photo { transform: scale(1.08); }
        .kategori-card .contoh-list { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.4s ease; opacity: 0; }
        .kategori-card:hover .contoh-list { max-height: 200px; opacity: 1; }
        .kategori-card .kcat-arrow { opacity: 0; transform: translateX(-6px); transition: opacity 0.3s ease, transform 0.3s ease; }
        .kategori-card:hover .kcat-arrow { opacity: 1; transform: translateX(0); }

        /* ── Cara kerja connector line ── */
        @keyframes lineGrow { from { width:0 } to { width:100% } }
        .connector-line { transition: background 0.5s ease; }

        /* ── Step number animate ── */
        .step-circle { transition: all 0.3s ease; }
        .step-circle:hover { transform: scale(1.15); }
      `}</style>

      <div className="bg-[#f8f7f4] text-gray-900 overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/about_us.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white">
            <div className="hero-badge inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] mb-8 backdrop-blur-sm text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Platform Vendor Kampus
            </div>

            <h1 className="font-black leading-[0.9] tracking-tight mb-8">
              <span className="hero-h1-1 block text-6xl md:text-8xl">Solusi Vendor</span>
              <span className="hero-h1-2 block text-6xl md:text-8xl text-amber-400">Event Kampus</span>
            </h1>

            <p className="hero-p text-white/60 text-lg max-w-xl mx-auto leading-relaxed mb-12">
              Satu platform untuk semua kebutuhan vendor — danusan, merchandise,
              dokumentasi, hingga perlengkapan event kampusmu.
            </p>

            <div className="hero-btns flex items-center justify-center gap-4 flex-wrap">
              <a href="/" className="group flex items-center gap-2 bg-amber-400 text-black px-7 py-3.5 rounded-full font-bold text-sm hover:bg-amber-300 hover:scale-105 transition-all duration-300">
                Jelajahi Vendor
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a href="/daftar-jadi-vendor" className="flex items-center gap-2 border border-white/30 text-white px-7 py-3.5 rounded-full font-semibold text-sm hover:border-white/60 hover:bg-white/10 transition-all duration-300">
                Daftar Vendor
              </a>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 divide-x divide-gray-100" data-stagger>
            {[
              { num: "150+", label: "Vendor Aktif", sub: "Terverifikasi & siap dihubungi" },
              { num: "500+", label: "Event Terbantu", sub: "Dari berbagai kampus Indonesia" },
              { num: "98%",  label: "Rating Positif", sub: "Kepuasan pelanggan terverifikasi" },
            ].map((s, i) => (
              <div key={i} className="text-center px-8 py-10 hover:bg-amber-50 transition-colors duration-500">
                <div className="text-4xl font-black text-amber-500 mb-1 tabular-nums num-pop">{s.num}</div>
                <div className="font-semibold text-gray-800 text-sm mb-0.5">{s.label}</div>
                <div className="text-gray-400 text-xs">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="py-4 bg-amber-400 overflow-hidden select-none">
          <div className="ticker-track text-black/70 text-sm font-semibold uppercase tracking-widest">
            {Array(6).fill(null).map((_, i) => (
              <span key={i} className="mx-10">✦ Vendor Terverifikasi &nbsp;✦ Harga Transparan &nbsp;✦ Langsung via WhatsApp &nbsp;✦ Sekitar Kampus &nbsp;✦ 150+ Vendor &nbsp;✦ 500+ Event</span>
            ))}
          </div>
        </div>

        {/* ── KATEGORI (UPDATED) ── */}
        <section className="py-28 px-6 bg-[#f8f7f4]">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-16">
              <div data-reveal="left">
                <p className="text-amber-500 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Layanan</p>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight draw-line">
                  Kategori<br />Vendor
                </h2>
                <p className="text-gray-400 text-sm mt-4 max-w-xs leading-relaxed">
                  6 kategori vendor siap memenuhi semua kebutuhan event kampusmu — dari konsumsi hingga dokumentasi.
                </p>
              </div>
              <a href="/" data-reveal="right" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-gray-900 text-sm transition-colors duration-300">
                Lihat semua vendor →
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5" data-stagger>
              {KATEGORI.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="kategori-card group card-lift relative bg-white rounded-2xl border border-gray-100 cursor-pointer block"
                >
                  {/* Photo area - top of card */}
                  <div className="relative h-40 overflow-hidden rounded-t-2xl">
                    <img
                      src={item.photo}
                      alt={item.label}
                      className="kcat-photo w-full h-full object-cover"
                    />
                    {/* Dark overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    {/* Number tag top-right */}
                    <div className="absolute top-3 right-4 text-white/30 text-5xl font-black leading-none select-none">
                      {item.num}
                    </div>
                    {/* Count badge bottom-left */}
                    <div
                      className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm"
                      style={{ backgroundColor: `${item.accent}cc`, color: "#fff" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                      {item.count}
                    </div>
                    {/* Accent bottom border */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: item.accent }} />
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{item.label}</h3>
                      <span className="kcat-arrow text-gray-400 text-base mt-0.5">→</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.sub}</p>

                    {/* Contoh vendor — slide in on hover */}
                    <div className="contoh-list space-y-1.5">
                      <div className="h-px bg-gray-50 mb-3" />
                      {item.contoh.map((c, ci) => (
                        <div key={ci} className="flex items-center gap-2 text-xs text-gray-400">
                          <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.accent }} />
                          {c}
                        </div>
                      ))}
                      <p className="text-xs font-semibold pt-2" style={{ color: item.accent }}>
                        {item.harga}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── CARA KERJA (UPDATED) ── */}
        <section className="py-28 px-6 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20" data-reveal>
              <p className="text-amber-500 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Proses</p>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">Cara Kerja Platform</h2>
              <p className="text-gray-400 text-sm mt-4 max-w-md mx-auto leading-relaxed">
                Dari mencari vendor hingga acara sukses, prosesnya cepat dan mudah — cukup 4 langkah saja.
              </p>
            </div>

            {/* Steps grid */}
            <div className="grid md:grid-cols-4 gap-8 relative" data-stagger>
              {/* Connector line (desktop) */}
              <div
                className="hidden md:block absolute top-5 left-[15%] right-[15%] h-px connector-line"
                style={{ background: "linear-gradient(90deg, transparent, #fbbf24 30%, #fbbf24 70%, transparent)" }}
              />

              {CARA_KERJA.map((item, i) => (
                <div key={i} className="relative text-center group">
                  {/* Circle */}
                  <div className="step-circle w-11 h-11 rounded-full border-2 border-amber-200 bg-amber-50 flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400 group-hover:border-amber-400 group-hover:scale-110 transition-all duration-300">
                    <span className="text-amber-500 group-hover:text-white text-xs font-black transition-colors duration-300">
                      {item.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.desc}</p>

                  {/* Detail badge */}
                  <div className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 text-xs text-gray-400 font-medium group-hover:bg-amber-50 group-hover:border-amber-100 group-hover:text-amber-600 transition-all duration-300">
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-16 text-center" data-reveal>
              <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-6 py-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold text-gray-900">Gratis sepenuhnya</span> — tidak ada biaya pendaftaran atau komisi untuk mahasiswa yang mencari vendor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VISI MISI ── */}
        <section className="py-28 px-6 bg-[#f8f7f4]">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div data-reveal="left" className="relative bg-gray-900 rounded-3xl p-10 overflow-hidden card-lift">
              <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full opacity-30"
                style={{ background: "radial-gradient(circle, #f59e0b 0%, transparent 70%)" }} />
              <p className="text-amber-400 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Visi</p>
              <h2 className="text-2xl font-black text-white mb-4 leading-tight">
                Menjadi Platform Utama<br />Vendor Kampus Indonesia
              </h2>
              <p className="text-white/50 leading-relaxed text-sm">
                Menghubungkan organisasi kampus dengan vendor terpercaya
                di seluruh Indonesia secara efisien dan transparan.
              </p>
            </div>

            <div data-reveal="right" className="relative bg-white border border-gray-100 rounded-3xl p-10 card-lift">
              <p className="text-gray-400 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Misi</p>
              <h2 className="text-2xl font-black text-gray-900 mb-6 leading-tight">Komitmen<br />Kami</h2>
              <ul className="space-y-4">
                {[
                  "Menghubungkan mahasiswa dengan vendor terpercaya",
                  "Transparansi harga tanpa biaya tersembunyi",
                  "Mempercepat proses pencarian vendor",
                  "Mendukung kesuksesan setiap event kampus",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm group/item">
                    <span className="w-5 h-5 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-amber-400 group-hover/item:border-amber-400 transition-all duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 group-hover/item:bg-white transition-colors duration-300" />
                    </span>
                    <span className="text-gray-500 group-hover/item:text-gray-800 transition-colors duration-300">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── TESTIMONI CAROUSEL ── */}
        <section className="py-28 bg-white border-t border-gray-100 overflow-hidden">
          <div className="text-center mb-16 px-6" data-reveal>
            <p className="text-amber-500 text-xs uppercase tracking-[0.2em] mb-3 font-semibold">Testimoni</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Apa Kata Mereka?</h2>
            <p className="text-gray-400 text-sm mt-3">Geser atau drag untuk melihat lebih banyak →</p>
          </div>

          <div ref={trackRef} className="carousel-track flex gap-5 px-8 pb-4 select-none">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div key={i}
                className="flex-shrink-0 w-80 bg-[#f8f7f4] border border-gray-100 rounded-2xl p-7 card-lift">
                <div className="text-4xl text-amber-200 font-serif mb-3 leading-none">"</div>
                <p className="text-gray-500 leading-relaxed mb-7 text-sm">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-600 text-xs font-black flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="text-gray-900 font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.univ}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-32 px-6 text-center bg-gray-900 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full opacity-20 blur-[80px]"
            style={{ background: "radial-gradient(ellipse, #f59e0b 0%, transparent 70%)" }} />
          <div className="relative z-10" data-reveal>
            <p className="text-amber-400 text-xs uppercase tracking-[0.2em] mb-6 font-semibold">Mulai Sekarang</p>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Wujudkan Event<br />Kampusmu
            </h2>
            <p className="text-white/40 mb-12 max-w-md mx-auto leading-relaxed text-sm">
              Bergabung dengan ratusan organisasi mahasiswa yang sudah mempercayakan vendor mereka di sini.
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="/" className="group bg-amber-400 text-black font-bold px-8 py-4 rounded-full hover:bg-amber-300 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm">
                Jelajahi Vendor
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <a href="/daftar-jadi-vendor" className="border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm">
                Daftar Jadi Vendor
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}