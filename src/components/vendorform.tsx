import VendorForm from "@/components/vendorform";

export default function DaftarVendor() {
  return (
    <main className="min-h-screen bg-neutral py-16 flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-12 text-text-dark">
          Daftar sebagai Vendor Danusan
        </h1>
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-center text-text-muted mb-8">Isi form di bawah untuk bergabung dan jangkau mahasiswa!</p>
          <VendorForm /> {/* Komponen form kamu */}
        </div>
      </div>
    </main>
  );
}