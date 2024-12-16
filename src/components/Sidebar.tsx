import React from 'react';
import { CountdownTimer } from './CountdownTimer';
import { nextEvent } from '../data/mockData';

export function Sidebar() {
  return (
    <div className="space-y-8">
      <CountdownTimer targetDate={nextEvent} />
    </div>
  );
}