import Hero from '@/components/Hero';
import ImageTextButtonGrid from '@/components/ImageTextButtonGrid';
import Head from 'next/head';

 

const heroData = {
  title: 'Unlock Smart Living',
  description: 'Experience effortless living with smart devices that bring convenience and security to your fingertips, making everyday tasks simpler and your home more comfortable.',
  imageSrc: '/home/smartHome.jpeg',
  imageAlt: 'Smart Life',  
};

const cards = [
  { src: '/home/smartLighting.jpeg', alt: 'Smart Lighting', mainText: 'Smart Lighting', description: 'Illuminate your home with intelligent lighting solutions for control and ambiance...', slug: 'smartLighting' },
  { src: '/home/securityCameras.jpeg', alt: 'Smart Security', mainText: 'Smart Security', description: 'Protect your home with advanced security cameras, smart locks, and video doorbells..', slug: 'smartSecurity' },
  { src: '/home/smartSpeakers.jpeg', alt: 'Echo Smart Speakers', mainText: 'Echo Smart Speakers', description: 'Keep your home connected with Echo smart speakers for seamless voice control, music, and smart home integration.', slug: 'smartSpeakers' },
  { src: '/home/kitchen.jpg', alt: 'Smart Kitchen Appliances', mainText: 'Smart Kitchen Appliances', description: 'Upgrade your kitchen with smart pot cookers, ovens, coffee makers.', slug: 'smartKitchen' },
  { src: '/home/smartCleaning.jpeg', alt: 'Smart Cleaning Devices', mainText: 'Smart Cleaning Devices', description: 'Keep your home clean with robot vacuums for easy maintenance.', slug: 'smartCleaning' },
];
 

export default function Page() {
  return (<>
    <Head>
    <meta name="description" content="Experience a new level of convenience with smart devices that transform your daily life." />
    <meta property="og:title" content="Unlock Smart Living" />
    <meta property="og:description" content="Experience a new level of convenience with smart devices that transform your daily life" />
    <meta property="og:image" content="/home/smartHome.jpeg" />
    <meta property="og:url" content="https://5smarta.com/" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
    <main className="bg-cover bg-center bg-no-repeat " > 
      <Hero {...heroData} />
      <ImageTextButtonGrid cards={cards} />
    </main>
    </>
  );
}
