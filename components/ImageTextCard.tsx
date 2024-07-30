'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

interface ImageTextCardProps {
  src: string;
  alt: string;
  mainText: string;
  hoverText: string;
  slug: string;
  id: string;
}

const ImageTextCard = ({ src, alt, mainText, hoverText, slug, id }: ImageTextCardProps) => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleTouchStart = () => {
    setActiveCardId(id);
  };

  const handleTouchEnd = () => {
    setActiveCardId(null);
  };

  return (
    <div
      className={`relative flex flex-col items-center mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 group
        ${activeCardId === id ? 'scale-105 bg-yellow-600' : ''} transition-transform duration-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl w-full`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full">
        <div className="relative w-full" style={{ height: '400px' }}>
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            priority
            className="transition-opacity duration-300 group-hover:opacity-70"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-center bg-black bg-opacity-0 text-white p-4 text-center font-inter">
            <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-2 group-hover:hidden">{mainText}</h2>
          </div>
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center font-inter">
            <h2 className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-2">{mainText}</h2>
            <p className="text-xs px- xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-4">{hoverText}</p>
            <Link href={`/${slug}`} passHref>
              <Button
                type="button"
                title="Learn More"
                ariaLabel={`Learn more about ${mainText}`}
                variant="btn_solid"
                className="transition-transform duration-300 transform hover:scale-105 px-3 py-1.5 xs:px-3 xs:py-1.5 sm:px-3.5 sm:py-2.5 md:px-4 md:py-2 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 2xl:px-7 2xl:py-3.5 text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-base 2xl:text-lg bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 font-inter"
              >
                See More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextCard;
