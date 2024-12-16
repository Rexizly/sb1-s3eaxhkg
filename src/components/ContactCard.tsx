import React from react;
import { Mail, Github, Linkedin } from 'lucide-react';

export function ContactCard() {
  return (
    <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">iletim</h2>
      <div className="space-y-4">
        <a
          href="mailto:fsmvutalks@gmail.com"
          className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>fsmvutalks@gmail.com</span>
        </a>
        <div className="flex gap-4 mt-6">
          <a
            href="#"
            className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
