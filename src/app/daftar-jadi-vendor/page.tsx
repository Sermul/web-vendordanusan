"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function DaftarVendor() {
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push("/daftar-vendor")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F0B100] via-[#E8A700] to-[#F2BF35] px-6 py-16">
      <div className="w-full max-w-lg rounded-3xl border border-amber-400/20 bg-white/95 p-8 shadow-2xl shadow-amber-900/10">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500">VenKampus</p>
          <h1 className="mt-3 text-3xl font-bold text-slate-900">Daftar Jadi Vendor</h1>
          <p className="mt-2 text-sm text-slate-600">Isi formulir berikut untuk mendaftarkan usaha Anda.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input placeholder="Nama Usaha" className="bg-slate-100 text-slate-900 border-slate-200" />
          <Input placeholder="Kategori (Makanan / Minuman / Lainnya)" className="bg-slate-100 text-slate-900 border-slate-200" />
          <Input placeholder="Minimal Order" className="bg-slate-100 text-slate-900 border-slate-200" />
          <Input placeholder="Harga Estimasi" className="bg-slate-100 text-slate-900 border-slate-200" />
          <Input placeholder="Nomor WhatsApp" className="bg-slate-100 text-slate-900 border-slate-200" />
          <Textarea placeholder="Deskripsi Usaha" className="bg-slate-100 text-slate-900 border-slate-200" />

          <Button type="submit" className="w-full bg-slate-900 text-white hover:bg-black">
            Kirim Pendaftaran
          </Button>
        </form>

        <div className="mt-5 text-center text-sm text-slate-600">
          Sudah punya akun vendor? <Link href="/login" className="font-semibold text-amber-600 hover:text-amber-500">Masuk</Link>
        </div>
      </div>
    </div>
  )
}