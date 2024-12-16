import React from 'react';

const pastSpeakers = [
  {
    name: "Emily Thompson",
    talk: "The Art of Digital Storytelling",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Michael Lee",
    talk: "Neuroscience of Creativity",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Prof. Lisa Rodriguez",
    talk: "Future of Education",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80"
  }
];

export function SpeakerHighlight() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-2">Past Speakers</h2>
      <div className="w-20 h-1 bg-red-600 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pastSpeakers.map((speaker, index) => (
          <div key={index} className="group relative overflow-hidden rounded-xl aspect-[3/4]">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
              <p className="text-gray-300">{speaker.talk}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}