'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

export default function ProductCard({
  imageSrc,
  title,
  description,
  link,
}: ProductCardProps) {
  const [isTouched, setIsTouched] = useState(false);

  const handleTouchStart = () => {
    setIsTouched(true);
  };

  const handleTouchEnd = () => {
    setIsTouched(false);
  };

  return (
    <div
      className={`bg-blue-300 p-4 rounded-lg shadow-lg transition-transform transform 
        ${isTouched ? 'scale-105 bg-yellow-300': ''} hover:bg-yellow-300 hover:scale-105 active:scale-95`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <Link
        href={link}
        className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
        passHref
      >
        See it
      </Link>
    </div>
  );
}
