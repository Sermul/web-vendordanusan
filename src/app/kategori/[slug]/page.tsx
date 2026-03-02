import { notFound } from "next/navigation";
import { dummyVendors } from "@/lib/dummyVendors";
import VendorCard from "@/components/vendorcard";

/* ======================
   TYPE VENDOR
====================== */
interface Vendor {
  id: number;
  name: string;
  slug: string;
  category: string;
  photo_url: string;
  description: string;
  address: string;
  min_order: string;
  price: string;
  whatsapp: string;
  rating: number;
  distance: string;
  discount?: boolean;
}

interface Props {
  params: {
    slug: string;
  };
}

export default function KategoriPage({ params }: Props) {
  const { slug } = params;

  // pastikan vendors bertipe
const filteredVendors = dummyVendors.filter(
  (vendor) => vendor.category === slug
);

  if (filteredVendors.length === 0) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Vendor {slug}
      </h1>

      {/* FILTER SECTION */}
      <div className="bg-white p-6 rounded-xl shadow mb-10 grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Cari lokasi..."
          className="border p-3 rounded-lg"
        />

        <select className="border p-3 rounded-lg">
          <option value="">Filter Provinsi</option>
          <option>DKI Jakarta</option>
          <option>Jawa Barat</option>
          <option>Jawa Tengah</option>
          <option>Jawa Timur</option>
          <option>Banten</option>
        </select>

        <select className="border p-3 rounded-lg">
          <option value="">Filter Harga</option>
          <option value="low">Termurah</option>
          <option value="high">Termahal</option>
        </select>
      </div>

      {/* DISKON SECTION */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Promo Diskon 🔥
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {filteredVendors
            .filter((vendor) => vendor.discount)
            .map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
        </div>
      </div>

      {/* VENDOR GRID */}
      <div className="grid md:grid-cols-3 gap-8">
        {filteredVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>
    </div>
  );
}