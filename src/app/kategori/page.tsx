import { dummyVendors } from "@/lib/dummyVendors"
import { Vendor } from "@/types/vendor"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const vendors: Vendor[] = dummyVendors.filter(
    (v) => v.category === params.slug
  )

  if (vendors.length === 0) return notFound()

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 capitalize">
        {params.slug}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {vendors.map((vendor) => (
          <Link
            key={vendor.id}
            href={`/vendor/${vendor.slug}`}
          >
            <div className="bg-white rounded-2xl shadow-md p-4">
              <Image
                src={vendor.photo_url}
                alt={vendor.name}
                width={400}
                height={250}
                className="rounded-xl"
              />
              <h3 className="font-semibold mt-3">
                {vendor.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}