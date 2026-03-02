'use client';  // WAJIB! Ini bikin komponen jalan di client-side (Leaflet tidak bisa di server)

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '@/lib/leaflet-fix';

// Type Vendor (harus sesuai dengan yang kamu pakai di data)
interface Vendor {
  id: string;
  name: string;
  slug: string;
  description: string;
  address: string;
  category: string;
  min_order: number;
  price: string;
  lat: number;
  lng: number;
  phone: string;
  whatsapp: string;
}

// ← INI BAGIAN YANG HILANG: definisikan props yang diterima MapView
interface MapViewProps {
  vendors: Vendor[];  // props vendors adalah array Vendor[]
}

export default function MapView({ vendors }: MapViewProps) {
  return (
    <div className="w-full h-[500px] rounded-xl overflow-hidden border border-gray-200 shadow-xl">
      <MapContainer
        center={[-6.2, 106.8]}  // pusat Indonesia contoh
        zoom={5}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vendors.map((vendor) => (
          <Marker key={vendor.id} position={[vendor.lat, vendor.lng]}>
            <Popup>
              <strong>{vendor.name}</strong><br />
              {vendor.address}<br />
              Minimal {vendor.min_order} • {vendor.price}<br />
              <a href={`/vendor/${vendor.slug}`} className="text-blue-600 hover:underline">
                Lihat Detail
              </a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}