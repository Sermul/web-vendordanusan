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
  discount?: boolean; // optional
}