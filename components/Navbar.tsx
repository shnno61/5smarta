'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { NAV_LINKS } from '@/constants';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-gray-300 text-gray-800 shadow-md font-sans">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-3 lg:px-5 lg:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/logoshn.png" 
            alt="logo" 
            width={130} 
            height={36} 
            priority 
            className="fixed-dimension"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="relative">
              <Link
                href={link.href}
                className={clsx(
                  'flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-300 hover:bg-yellow-300 hover:text-blue-600 ',
                  {
                    'bg-yellow-300 text-blue-600': pathname === link.href,
                  }
                )}
              >
                <span className="hidden md:block">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
          onClick={toggleMobileMenu}
        >
          <Image 
            src="/menu.svg" 
            alt="menu" 
            width={28} 
            height={28} 
            priority 
            className="fixed-dimension"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={clsx(
        "fixed top-0 right-0 bottom-0 w-2/3 bg-gradient-to-r from-gray-100 to-gray-200 shadow-lg rounded-l-xl lg:hidden transition-transform duration-300 transform-gpu",
        {
          'translate-x-full': !isMobileMenuOpen,
          'translate-x-0': isMobileMenuOpen,
        }
      )}>
        <div className="flex flex-col items-center p-4 h-full">
          <button
            className="self-end mb-4 p-2 rounded-full bg-blue-400 hover:bg-gray-300 transition-colors duration-300"
            onClick={toggleMobileMenu}
          >
            <Image 
              src="/close.svg" 
              alt="close menu" 
              width={24} 
              height={24} 
              priority 
              className="fixed-dimension"
            />
          </button>
          <ul className="flex flex-col items-center gap-5 w-full">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="w-full">
                <Link
                  href={link.href}
                  className={clsx(
                    'block w-full text-center px-3 py-2 text-lg font-medium text-gray-700 transition-colors duration-300 hover:bg-yellow-600 hover:text-white',
                    {
                      'bg-yellow-300 text-blue-600': pathname === link.href,
                    }
                  )}
                  onClick={() => setMobileMenuOpen(false)} // Close the menu when a link is clicked
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
