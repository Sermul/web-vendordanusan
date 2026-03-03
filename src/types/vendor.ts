export type Vendor = {
  id: number
  name: string
  slug: string
  category:
    | "makanan"
    | "minuman"
    | "snack"
    | "merchandise"
    | "dokumentasi"
    | "perlengkapan"
  photo_url: string
  description: string
  address: string
  min_order: string
  price: string
  whatsapp: string
  rating: number
  distance: string
  discount?: boolean; 
  lat: number
lng: number
}