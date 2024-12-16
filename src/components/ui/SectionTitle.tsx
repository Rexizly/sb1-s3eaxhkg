import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <>
      <h2 className="text-4xl font-bold mb-2">{children}</h2>
      <div className="w-20 h-1 bg-red-600 mb-8" />
    </>
  );
}