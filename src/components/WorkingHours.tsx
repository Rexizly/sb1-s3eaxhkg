import React from 'react';
import { Clock } from 'lucide-react';

const hours = [
  { day: 'Monday', time: '9:00 - 17:00' },
  { day: 'Tuesday', time: '9:00 - 17:00' },
  { day: 'Wednesday', time: '9:00 - 17:00' },
  { day: 'Thursday', time: '9:00 - 17:00' },
  { day: 'Friday', time: '9:00 - 17:00' },
  { day: 'Saturday', time: '9:00 - 17:00' },
  { day: 'Sunday', time: '9:00 - 17:00' }
];

export function WorkingHours() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-6 hover:border-red-600/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-600/10 rounded-lg">
          <Clock className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold">Working Hours</h2>
      </div>
      
      <div className="space-y-3">
        {hours.map(({ day, time }) => (
          <div key={day} className="flex justify-between items-center py-2 border-b border-zinc-800 last:border-0">
            <span className="text-zinc-300">{day}</span>
            <span className="text-red-600 font-medium">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}