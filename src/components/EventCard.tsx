import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Event } from '../types/event';
import { RegistrationModal } from './RegistrationModal';

interface EventCardProps extends Event {}

export function EventCard({ id, title, date, time, location, description, capacity, registeredCount, speaker }: EventCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [localRegisteredCount, setLocalRegisteredCount] = useState(registeredCount);
  
  const spotsLeft = capacity - localRegisteredCount;
  const isFullyBooked = spotsLeft <= 0;

  const handleRegistrationSuccess = () => {
    setLocalRegisteredCount(prev => prev + 1);
  };

  return (
    <>
      <div className="group bg-zinc-900 rounded-xl border border-zinc-800 hover:border-red-600/50 transition-all duration-300">
        <div className="p-8">
          <div className="flex items-start gap-6">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 mb-2">{speaker.name} · {speaker.role}</p>
              <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-red-600" />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>{location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Users className="w-5 h-5 text-red-600" />
                  <span>{spotsLeft} spots left</span>
                </div>
              </div>
              
              <button
                onClick={() => setShowModal(true)}
                disabled={isFullyBooked}
                className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isFullyBooked ? 'Fully Booked' : 'Reserve Your Seat'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <RegistrationModal
          event={{ id, title, date, time, location, description, capacity, registeredCount: localRegisteredCount, speaker }}
          onClose={() => setShowModal(false)}
          onSuccess={handleRegistrationSuccess}
        />
      )}
    </>
  );
}