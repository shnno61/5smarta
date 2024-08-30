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
      className={`  p-2 pb-3 rounded-lg shadow-lg transition-transform transform m-2 border-4 border-blue-500
        ${isTouched ? 'scale-105 ' : ''} hover:scale-105  `}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-64 sm:h-64 md:h-64 lg:h-72 xl:h-90 2xl:h-80 3xl:h-96 4xl:h-96 overflow-hidden ">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: 'contain' }} // Ensures the image covers the container
          className="rounded-t-lg"
        />
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-800 mb-4">{description}</p>
      <Link
        href={link}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
        passHref
      >
        See it
      </Link>
    </div>
  );
}
