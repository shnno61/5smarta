import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smart Home Devices',
  description: 'Discover smart devices designed to enhance your everyday life.',
  metadataBase: new URL('https://www.myawesomewebsite.com/'),
  openGraph: {
    title: 'Smart Home Devices',
    description: 'Discover smart devices designed to enhance your everyday life.',
    images: ['/smartHome.jpeg'],
    url: 'https://www.myawesomewebsite.com/smartHome',
  }
};

const page = () => {
  const heroData = {
    title: 'Smart Home',
    description: 'Transform your home with cutting-edge smart devices, offering seamless comfort, convenience, and security.',
    imageSrc: '/home/smartHome.jpeg',
    imageAlt: 'Smart Home Devices',
  };

  const cards = [
    { src: '/smartHome/smartLighting.jpeg', alt: 'Smart Lighting', mainText: 'Smart Lighting', description: 'Illuminate your home with intelligent lighting solutions for control and ambiance...', slug: 'smartHome/smartLighting' },
    { src: '/smartHome/SmartHomeSecurity.jpeg', alt: 'Smart Security', mainText: 'Smart Security', description: 'Protect your home with advanced security cameras, smart locks, and video doorbells..', slug: 'smartHome/smartSecurity' },
    { src: '/smartHome/smartThermostats.jpeg', alt: 'Smart Thermostats', mainText: 'Smart Thermostats', description: 'Optimize your home\'s climate with pretty, intelligent, energy-efficient thermostats...', slug: 'smartHome/smartThermostats' },
    { src: '/smartHome/smartkitchen.jpg', alt: 'Smart Kitchen Appliances', mainText: 'Smart Kitchen Appliances', description: 'Upgrade your kitchen with smart refrigerators, ovens, coffee makers, and dishwashers.', slug: 'smartHome/smartKitchen' },
    { src: '/smartHome/smartEntertainment.jpeg', alt: 'Smart Home Entertainment', mainText: 'Smart Home Entertainment', description: 'Enhance entertainment with smart TVs, speakers, soundbars, projectors, and lamps.', slug: 'smartHome/smartEntertainment' },
    { src: '/smartHome/smartCleaning.jpeg', alt: 'Smart Cleaning Devices', mainText: 'Smart Cleaning Devices', description: 'Keep your home clean with robot vacuums, smart mops, and air purifiers for easy maintenance.', slug: 'smartHome/smartCleaning' },
    { src: '/smartHome/smartGarden.jpeg', alt: 'Smart Garden and Outdoor Devices', mainText: 'Smart Garden and Outdoor Devices', description: 'Manage your outdoor space with smart irrigation, efficient lighting, and sensors......', slug: 'smartHome/smartGarden' },
  ];
 
  return (
    <main className=" text-gray-900" >
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
  );
};

export default page;
