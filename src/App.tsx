import React from 'react';
import { MainContent } from './components/MainContent';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <MainContent />
          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
}