import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function DaftarVendor() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">
        Daftar Jadi Vendor
      </h1>

      <div className="bg-white p-10 rounded-2xl shadow-lg space-y-6">
        <Input placeholder="Nama Usaha" />
        <Input placeholder="Kategori (Makanan/Minuman/Snack)" />
        <Input placeholder="Minimal Order" />
        <Input placeholder="Harga Estimasi" />
        <Input placeholder="Nomor WhatsApp" />
        <Textarea placeholder="Deskripsi Usaha" />

        <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
          Kirim Pendaftaran
        </Button>
      </div>
    </section>
  );
}