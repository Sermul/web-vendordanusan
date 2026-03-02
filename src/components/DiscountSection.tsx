"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function DiscountSection() {
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
        <SwiperSlide>
          <img
            src="/diskon1.jpg"
            className="rounded-2xl shadow-lg h-48 w-full object-cover hover:scale-105 transition"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/diskon2.jpg"
            className="rounded-2xl shadow-lg h-48 w-full object-cover hover:scale-105 transition"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="/diskon3.jpg"
            className="rounded-2xl shadow-lg h-48 w-full object-cover hover:scale-105 transition"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}