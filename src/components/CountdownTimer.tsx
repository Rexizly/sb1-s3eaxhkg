import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg p-6 hover:border-red-600/50 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-red-600/10 rounded-lg">
          <Clock className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold">FSMTALKS İÇİN GERİ SAYIM</h2>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center">
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-3 border border-zinc-700">
              <div className="text-3xl font-bold text-red-600">
                {value.toString().padStart(2, '0')}
              </div>
              <div className="text-sm text-zinc-400 capitalize mt-1">{unit}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}