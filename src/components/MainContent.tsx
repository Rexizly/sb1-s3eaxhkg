import React from 'react';
import { EventCard } from './EventCard';
import { PhotoGallery } from './PhotoGallery';
import { LocationCard } from './LocationCard';
import { events } from '../data/mockData';
import { SectionTitle } from './ui/SectionTitle';

export function MainContent() {
  return (
    <div className="lg:col-span-2 space-y-16">
      <section id="upcoming-talks">
        <SectionTitle>Gelecek Etkinlikler</SectionTitle>
        <div className="space-y-8">
          {events.map(event => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </section>
      
      <section id="gallery">
        <PhotoGallery />
      </section>
      
      <section id="location">
        <LocationCard 
          embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0361007979022!2d28.94071937655333!3d41.04633961707966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0af04d14f19%3A0x47e31c9ef0679b2f!2sFatih%20Sultan%20Mehmet%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hali%C3%A7%20Yerle%C5%9Fkesi!5e0!3m2!1str!2str!4v1734289197010!5m2!1str!2str"
          address="Fatih Sultan Mehmet Vakıf Üniversitesi"
        />
      </section>
    </div>
  );
}