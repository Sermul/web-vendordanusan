import { Vendor } from "@/types/vendor"

export const dummyVendors: Vendor[] = [

  /* =========================
     MAKANAN
  ========================== */

   {
    id: 1,
    name: "Ayam Geprek Kampus",
    slug: "ayam-geprek-kampus",
    category: "makanan",
    photo_url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    description: "Danusan ayam geprek murah untuk mahasiswa.",
    address: "Jl. Mawar No.12",
    min_order: "50 pcs",
    price: "Rp 5.000 / pcs",
    whatsapp: "628123456789",
    rating: 4.8,
    distance: "0.8 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  {
    id: 2,
    name: "Nasi Box Organisasi",
    slug: "nasi-box-organisasi",
    category: "makanan",
    photo_url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    description: "Nasi box lengkap untuk acara kampus.",
    address: "Jl. Kenanga No.7",
    min_order: "30 box",
    price: "Rp 18.000 / box",
    whatsapp: "628888111222",
    rating: 4.7,
    distance: "1.2 km",
      discount: true, 
      lat: -7.27,
lng: 112.78,
  },

  /* =========================
     MINUMAN
  ========================== */

  {
    id: 3,
    name: "Es Teh Jumbo",
    slug: "es-teh-jumbo",
    category: "minuman",
    photo_url: "https://images.unsplash.com/photo-1497534446932-c925b458314e",
    description: "Minuman segar untuk event kampus.",
    address: "Jl. Melati No.10",
    min_order: "30 pcs",
    price: "Rp 3.000 / pcs",
    whatsapp: "628987654321",
    rating: 4.7,
    distance: "1 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  {
    id: 4,
    name: "Booth Kopi Mahasiswa",
    slug: "booth-kopi-mahasiswa",
    category: "minuman",
    photo_url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    description: "Booth kopi untuk event kampus.",
    address: "Jl. Dahlia No.2",
    min_order: "1 booth",
    price: "Mulai Rp 1.200.000",
    whatsapp: "628777222333",
    rating: 4.9,
    distance: "2 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  /* =========================
     SNACK
  ========================== */

  {
    id: 5,
    name: "Snack Box Hemat",
    slug: "snack-box-hemat",
    category: "snack",
    photo_url: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    description: "Snack box murah untuk acara organisasi.",
    address: "Jl. Kenanga No.5",
    min_order: "20 box",
    price: "Rp 10.000 / box",
    whatsapp: "6281122334455",
    rating: 4.9,
    distance: "0.5 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  {
    id: 6,
    name: "Dessert Box Lumer",
    slug: "dessert-box-lumer",
    category: "snack",
    photo_url: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    description: "Dessert box premium untuk danusan.",
    address: "Jl. Flamboyan No.3",
    min_order: "25 box",
    price: "Rp 15.000 / box",
    whatsapp: "6282211003344",
    rating: 4.8,
    distance: "1.5 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  /* =========================
     MERCHANDISE
  ========================== */

  {
    id: 7,
    name: "Kaos Event Custom",
    slug: "kaos-event-custom",
    category: "merchandise",
    photo_url: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    description: "Custom kaos dan atribut organisasi.",
    address: "Jl. Anggrek No.8",
    min_order: "24 pcs",
    price: "Rp 65.000 / pcs",
    whatsapp: "628111223344",
    rating: 4.6,
    distance: "2 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  {
    id: 8,
    name: "Tote Bag Kampus",
    slug: "tote-bag-kampus",
    category: "merchandise",
    photo_url: "https://images.unsplash.com/photo-1606813909023-551c0d72f7c3",
    description: "Custom tote bag untuk event kampus.",
    address: "Jl. Cempaka No.1",
    min_order: "50 pcs",
    price: "Rp 20.000 / pcs",
    whatsapp: "6283344556677",
    rating: 4.7,
    distance: "3 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  /* =========================
     DOKUMENTASI
  ========================== */

  {
    id: 9,
    name: "Fotografer Kampus Pro",
    slug: "fotografer-kampus-pro",
    category: "dokumentasi",
    photo_url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Jasa dokumentasi event dan aftermovie.",
    address: "Jl. Anggrek No.2",
    min_order: "1 event",
    price: "Mulai Rp 750.000",
    whatsapp: "6285566778899",
    rating: 4.9,
    distance: "3 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  {
    id: 10,
    name: "Videografer Aftermovie",
    slug: "videografer-aftermovie",
    category: "dokumentasi",
    photo_url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description: "Paket video cinematic untuk acara kampus.",
    address: "Jl. Melati No.9",
    min_order: "1 event",
    price: "Mulai Rp 1.200.000",
    whatsapp: "6289988776655",
    rating: 4.8,
    distance: "4 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  /* =========================
     PERLENGKAPAN
  ========================== */

  {
    id: 11,
    name: "Sewa Tenda & Sound",
    slug: "sewa-tenda-sound",
    category: "perlengkapan",
    photo_url: "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    description: "Sewa tenda, sound system, dan lighting.",
    address: "Jl. Flamboyan No.8",
    min_order: "1 paket",
    price: "Mulai Rp 1.500.000",
    whatsapp: "6284455667788",
    rating: 4.8,
    distance: "4 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },

  {
    id: 12,
    name: "Lighting & Stage Setup",
    slug: "lighting-stage-setup",
    category: "perlengkapan",
    photo_url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    description: "Paket panggung dan lighting event.",
    address: "Jl. Mawar No.15",
    min_order: "1 paket",
    price: "Mulai Rp 2.000.000",
    whatsapp: "6287766554433",
    rating: 4.9,
    distance: "5 km",
     discount: true, 
     lat: -7.27,
lng: 112.78,
  },
]


