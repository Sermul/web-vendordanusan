import { dummyVendors } from "@/lib/dummyVendors";
import { notFound } from "next/navigation";
import Image from "next/image";

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
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <Image
          src={vendor.photo_url}
          alt={vendor.name}
          width={800}
          height={500}
          className="rounded-2xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {vendor.name}
          </h1>

          <p className="text-gray-600 mb-6">
            {vendor.description}
          </p>

          <div className="space-y-3 text-gray-700 mb-8">
            <p><strong>Alamat:</strong> {vendor.address}</p>
            <p><strong>Kategori:</strong> {vendor.category}</p>
            <p><strong>Minimal Order:</strong> {vendor.min_order}</p>
            <p><strong>Harga:</strong> {vendor.price}</p>
          </div>

          <a
            href={`https://wa.me/${vendor.whatsapp}`}
            target="_blank"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl">
              Hubungi via WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}