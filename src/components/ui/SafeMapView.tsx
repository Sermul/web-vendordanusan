// src/components/ui/SafeMapView.tsx  (atau nama lain)
'use client';  // WAJIB! Ini bikin file ini Client Component

import dynamic from 'next/dynamic';

// Dynamic import MapView asli, dengan ssr: false di sini (di Client Component → aman!)
const MapView = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-full flex items-center justify-center bg-gray-100 rounded-xl">
      <p className="text-gray-500 font-medium">Memuat peta vendor...</p>
    </div>
  ),
});

// Export wrapper yang forward props
export default function SafeMapView(props: any) {
  return <MapView {...props} />;
}