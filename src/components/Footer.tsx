import React from 'react';
import { Mail, Twitter, Instagram, MapPin , } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-900 text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">İletişime Geçin</h3>
            <div className="space-y-4">
              <a
                href="mailto:fsmvutalks@gmail.com"
                className="flex items-center gap-3 hover:text-red-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>fsmvutalks@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Fatih Sultan Mehmet Vakıf Üniversitesi</span>
              </div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://x.com/FsmTalks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-lg hover:bg-red-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/fsmtalks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-800 rounded-lg hover:bg-red-600 transition-colors"
                  aria-label="Instagram"
                >
                  
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <a href="#upcoming-talks" className="hover:text-red-500 transition-colors">Gelecek Etkinlik</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-red-500 transition-colors">Foto Galeri</a>
              </li>
              <li>
                <a href="#location" className="hover:text-red-500 transition-colors">Bizi Bulun</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Güncel Kalın</h3>
            <p className="text-gray-400 mb-4">Haber bültenimiz için kayıt olarak ilk satın alacağınız ürünlerde %10 indirimden yararlanın!</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="E postanızı buraya giriniz."
                className="w-full px-4 py-2 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
              >
                FSMTALKS Ailesine Katıl
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Telif Hakkı © 2024 FSMTALKS - Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}