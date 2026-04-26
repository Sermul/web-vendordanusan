"use client"

import Link from "next/link"
import VendorCard from "./vendorcard"
import { useRef, useState } from "react"
interface Props {
  title: string
  slug: string
  vendors: any[]
}

export default function CategorySection({ title, slug, vendors }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
const [isDown, setIsDown] = useState(false)
const [startX, setStartX] = useState(0)
const [scrollLeft, setScrollLeft] = useState(0)

const handleMouseDown = (e: any) => {
  setIsDown(true)
  setStartX(e.pageX - scrollRef.current!.offsetLeft)
  setScrollLeft(scrollRef.current!.scrollLeft)
}

const handleMouseLeave = () => setIsDown(false)
const handleMouseUp = () => setIsDown(false)
const handleMouseMove = (e: React.MouseEvent) => {
  if (!isDown) return
  e.preventDefault()
  const x = e.pageX - scrollRef.current!.offsetLeft
  const walk = (x - startX) * 1.5
  scrollRef.current!.scrollLeft = scrollLeft - walk
}

// ✅ TAMBAH DI SINI
const scroll = (direction: "left" | "right") => {
  if (!scrollRef.current) return

  const amount = 300
  scrollRef.current.scrollBy({
    left: direction === "left" ? -amount : amount,
    behavior: "smooth",
  })
}

  return (
    <section className="mb-20">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-slate-800">
          {title}
        </h2>

 <Link href={`/vendor?kategori=${slug}`}>
  Lihat Lainnya
</Link>
      </div>

      {/* HORIZONTAL SCROLL */}
     <div className="relative group">

  {/* BUTTON LEFT */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
    bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
  >
    ◀
  </button>

  {/* BUTTON RIGHT */}
  <button
    onClick={() => scroll("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
    bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
  >
    ▶
  </button>

  {/* SCROLL AREA (INI SATU-SATUNYA) */}
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto no-scrollbar pb-4 scroll-smooth cursor-grab active:cursor-grabbing"
    onMouseDown={handleMouseDown}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
  >
    {vendors.map((vendor) => (
      <div key={vendor.id} className="min-w-[280px] flex-shrink-0">
        <VendorCard vendor={vendor} />
      </div>
    ))}
  </div>

      </div>
    </section>
  )

  
}
