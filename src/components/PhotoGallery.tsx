import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { PhotoModal } from './PhotoModal';

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80',
    title: 'Inspiring Talk Session'
  },
  {
    url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=2000&q=80',
    title: 'Community Gathering'
  },
  {
    url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=80',
    title: 'Workshop Moments'
  },
  {
    url: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=2000&q=80',
    title: 'Team Collaboration'
  }
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-6 hover:border-red-600/50 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-red-600/10 rounded-lg">
            <Camera className="w-6 h-6 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold">Photo Gallery</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl aspect-video cursor-pointer"
              onClick={() => setSelectedPhoto(photo.url)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPhoto && (
        <PhotoModal
          imageUrl={selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </div>
  );
}