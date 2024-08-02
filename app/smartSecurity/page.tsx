import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Security Devices',
  description: 'Discover smart security devices designed to protect your home and loved ones.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Security Devices',
    description: 'Discover smart security devices designed to protect your home and loved ones.',
    images: ['/smartSecurity.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartSecurity',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Security',
    description: 'Protect what matters most with smart security devices. Safety, reliability, and continuous monitoring.',
    imageSrc: '/home/smartSecurity.jpeg',
    imageAlt: 'Smart Security Devices',
  };

  const cards = [
    { src: '/smartSecurity/securityCameras.jpeg', alt: 'Security Cameras', mainText: 'Security Cameras', description: 'Monitor your property with high-quality indoor and outdoor cameras for complete surveillance.', slug: 'smartSecurity/securityCameras' },
    { src: '/smartSecurity/smartLocks.jpeg', alt: 'Smart Locks', mainText: 'Smart Locks', description: 'Enhance security with advanced keypad and fingerprint locks for better home protection.', slug: 'smartSecurity/smartLocks' },
    { src: '/smartSecurity/securitySystems.jpeg', alt: 'Security Systems', mainText: 'Security Systems', description: 'Safeguard your home with integrated smart security systems for comprehensive protection.', slug: 'smartSecurity/securitySystems' },
    { src: '/smartSecurity/videoDoorbells.jpeg', alt: 'Video Doorbells', mainText: 'Video Doorbells', description: 'See and communicate with visitors using video doorbells for added convenience and safety.', slug: 'smartSecurity/videoDoorbells' },
  ];

  return (
    <main className="bg-white text-gray-800">
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
