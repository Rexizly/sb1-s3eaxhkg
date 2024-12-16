import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  embedUrl: string;
  address: string;
}

export function LocationCard({ embedUrl, address }: LocationCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg overflow-hidden hover:border-red-600/50 transition-all duration-300">
      <div className="relative h-[300px]">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-red-600/10 rounded-lg">
            <MapPin className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold">Lokasyon</h2>
        </div>
        <p className="mt-4 text-zinc-300">{address}</p>
      </div>
    </div>
  );
}