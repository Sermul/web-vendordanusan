import { dummyVendors } from "@/lib/dummyVendors";
import { notFound } from "next/navigation";
import Image from "next/image";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function VendorDetail({
  params,
}: {
  params: { slug: string };
}) {

  const vendor = dummyVendors.find(
    (v) => v.slug === params.slug
  );

  if (!vendor) return notFound();

  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-950 text-white">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-slate-950/95" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="mb-12 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300">Vendor Unggulan</p>
          <h1 className="mt-4 text-5xl font-black">{vendor.name}</h1>
          <p className="mt-4 text-slate-300 text-lg leading-8">
            {vendor.description}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] items-start">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src={vendor.photo_url}
              alt={vendor.name}
              width={900}
              height={600}
              className="h-[520px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-[28px] border border-white/10 bg-slate-950/70 p-6 shadow-xl backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Kategori</p>
                  <p className="mt-2 text-xl font-semibold text-white">{vendor.category}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Minimal Order</p>
                  <p className="mt-2 text-xl font-semibold text-white">{vendor.min_order}</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Harga</p>
                  <p className="mt-2 text-3xl font-bold text-white">{vendor.price}</p>
                </div>
                <div className="rounded-3xl bg-amber-400 px-4 py-3 text-sm font-semibold text-black">Terbaik untuk Kampus</div>
              </div>
              <p className="mt-4 text-slate-300">Langsung hubungi vendor untuk negosiasi dan pengiriman cepat ke lokasi event kampusmu.</p>
            </div>

            <a
              href={`https://wa.me/${vendor.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block"
            >
              <button className="w-full rounded-full bg-emerald-400 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-emerald-300">
                Hubungi via WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}