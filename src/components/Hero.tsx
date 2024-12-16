import React from 'react';
import { Sparkles, Mic, Globe2, Users2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
              <Mic className="w-8 h-8" />
            </div>
            <h1 className="text-6xl font-bold">
              Ideas Worth
              <span className="block text-red-600">Spreading</span>
            </h1>
          </div>
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
            Join our community of thought leaders, innovators, and dreamers as we explore ideas that shape our future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { icon: Sparkles, text: "Birlikte Keşfedelim" },
              { icon: Globe2, text: "Kişisel Yolculuk" },
              { icon: Users2, text: "Hikayenizi Paylaşın" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-red-600/50 transition-colors">
                <item.icon className="w-8 h-8 text-red-600 mb-4" />
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}