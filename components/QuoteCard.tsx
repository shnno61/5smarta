'use client';

import React, { useState } from 'react';

interface QuoteCardProps {
  quote: string;
  author: string;
}

export default function QuoteCard({ quote, author }: QuoteCardProps) {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  return (
    <div
      className={`bg-gray-700 p-6 rounded-lg shadow-lg flex-1 transition-transform transform 
        ${isTouched ? 'scale-105 bg-gray-950' : ''} hover:bg-black hover:scale-105 active:scale-95 font-inter`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <p className="text-lg mb-4">{quote}</p>
      <cite className="text-gray-400">— {author}</cite>
    </div>
  );
}
