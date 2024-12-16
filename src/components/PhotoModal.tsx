import React from 'react';
import { X } from 'lucide-react';

interface PhotoModalProps {
  imageUrl: string;
  onClose: () => void;
}

export function PhotoModal({ imageUrl, onClose }: PhotoModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>
      <img
        src={imageUrl}
        alt="Enlarged view"
        className="max-w-full max-h-[90vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}