"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, MapPin } from "lucide-react";

export default function VendorCard({ vendor }: any) {
  const [fav, setFav] = useState(false);

  return (
    <Link href={`/vendor/${vendor.slug}`}>
      <div className="bg-white rounded-3xl shadow-sm hover:shadow-xl 
                      hover:-translate-y-2 transition-all duration-300 
                      overflow-hidden border border-gray-100 group cursor-pointer">

        {/* IMAGE */}
        <div className="relative overflow-hidden">
          <Image
            src={vendor.photo_url}
            alt={vendor.name}
            width={600}
            height={400}
            className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
          />

          {/* BADGE KATEGORI */}
          <div className="absolute top-4 left-4 bg-slate-900 text-white text-xs px-3 py-1 rounded-full">
            {vendor.category}
          </div>

          {/* FAVORIT */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setFav(!fav);
            }}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full shadow"
          >
            <Heart
              size={18}
              className={fav ? "text-red-500 fill-red-500" : "text-gray-400"}
            />
          </button>
        </div>

        {/* CONTENT */}
        <div className="p-5 space-y-3">

          {/* NAMA */}
          <h3 className="text-lg font-bold text-slate-800">
            {vendor.name}
          </h3>

          {/* RATING + JARAK */}
          <div className="flex justify-between text-sm text-gray-500">
            <span>⭐ {vendor.rating}</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} /> {vendor.distance}
            </span>
          </div>

          {/* MIN ORDER */}
          <div className="text-sm text-gray-600">
            Minimal Order: {vendor.min_order}
          </div>

          {/* HARGA */}
          <div className="text-base font-semibold text-slate-900">
            {vendor.price}
          </div>
        </div>
      </div>
    </Link>
  );
}