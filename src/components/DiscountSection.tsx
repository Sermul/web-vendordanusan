"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"


export default function DiscountSection({ vendors }: any) {
  return (
    <section className="my-24">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">
          🔥 Diskon Spesial
        </h2>
      </div>

      <Swiper
  modules={[Autoplay]}
  slidesPerView={3}
  spaceBetween={20}
  autoplay={{ delay: 2500 }}
  loop
  breakpoints={{
    0: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {vendors.map((vendor: any) => (
    <SwiperSlide key={vendor.id}>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition">

        <img
          src={vendor.photo_url}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h3 className="font-bold text-lg">{vendor.name}</h3>
          <p className="text-sm text-gray-500">{vendor.price}</p>
        </div>

      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  )
}