import { Event } from '../types/event';

export const nextEvent = new Date('2025-03-15T18:00:00');

export const clubLocation = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.0361007979022!2d28.94071937655333!3d41.04633961707966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab0af04d14f19%3A0x47e31c9ef0679b2f!2sFatih%20Sultan%20Mehmet%20Vak%C4%B1f%20%C3%9Cniversitesi%20Hali%C3%A7%20Yerle%C5%9Fkesi!5e0!3m2!1str!2str!4v1734289197010!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade';

export const events: Event[] = [
  {
    id: '1',
    title: "The Future of Human Connection",
    date: "April 15, 2024",
    time: "6:00 PM",
    location: "Grand Auditorium",
    description: "Join renowned psychologist Dr. Sarah Chen as she explores how technology is reshaping human relationships and what it means for our future.",
    capacity: 200,
    registeredCount: 100,
    speaker: {
      name: "Dr. Sarah Chen",
      role: "Behavioral Psychologist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
    }
  },
  {
    id: '2',
    title: "Breaking Barriers in Quantum Computing",
    date: "April 22, 2024",
    time: "5:30 PM",
    location: "Innovation Theater",
    description: "Dr. James Martinez presents groundbreaking discoveries in quantum computing and their potential impact on solving humanity's greatest challenges.",
    capacity: 180,
    registeredCount: 120,
    speaker: {
      name: "Dr. James Martinez",
      role: "Quantum Physicist",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    }
  }
];