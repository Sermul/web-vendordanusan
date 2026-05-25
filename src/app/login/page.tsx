"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AnimatedBackground from "@/components/AnimatedBackground"

export default function Login() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/");
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#F0B100] via-[#E8A700] to-[#F2BF35] px-6 py-10">
      <AnimatedBackground />
      <div className="w-full max-w-md rounded-3xl border border-[#F0B100]/30 bg-white/95 p-8 shadow-2xl shadow-[#F0B100]/20">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#F0B100]">VenKampus</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-950">Login Akun</h1>
          <p className="mt-3 text-sm text-slate-700">Masuk untuk melanjutkan ke halaman utama.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <Input placeholder="Email" type="email" className="bg-slate-100 text-slate-900 border-slate-300" />
          <Input placeholder="Password" type="password" className="bg-slate-100 text-slate-900 border-slate-300" />

          <Button type="submit" className="w-full bg-slate-950 text-white hover:bg-black">
            Login
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-700">
          Belum punya akun?{' '}
          <Link href="/register" className="font-semibold text-orange-600 hover:text-orange-700">
            Daftar sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}