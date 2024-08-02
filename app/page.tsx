import Hero from '@/components/Hero';
import ImageTextGrid from '@/components/ImageTextGrid';
import Head from 'next/head';

 

const heroData = {
  title: 'Unlock Smart Living',
  description: 'Experience effortless living with smart devices that bring convenience and security to your fingertips, making everyday tasks simpler and your home more comfortable.',
  imageSrc: '/home/SmartLife.jpeg',
  imageAlt: 'Smart Life',  
};

const cardsData = [
  { src: '/home/smartHome.jpeg', alt: 'smartHome', mainText: 'Smart Home', hoverText: 'Revolutionize your living space with cutting-edge smart home devices...', slug: 'smartHome' },
  { src: '/home/smartOffice.jpeg', alt: 'smartOffice', mainText: 'Smart Office', hoverText: 'Boost your productivity with state-of-the-art smart office devices...', slug: 'smartOffice' },
  { src: '/home/smartHealth.jpeg', alt: 'smartHealth', mainText: 'Smart Health', hoverText: 'Take control of your well-being with innovative smart health devices...', slug: 'smartHealth' },
  { src: '/home/smartSecurity.jpeg', alt: 'smartSecurity', mainText: 'Smart Security', hoverText: 'Protect what matters most with advanced smart security devices...', slug: 'smartSecurity' },
  { src: '/home/smartWearables.jpeg', alt: 'smartWearables', mainText: 'Smart Wearables', hoverText: 'Elevate your lifestyle with versatile smart wearables..', slug: 'smartWearables' },
];

export default function Page() {
  return (<>
    <Head>
    <title>Smart Life</title>
    <meta name="description" content="Experience a new level of convenience with smart devices that transform your daily life." />
    <meta property="og:title" content="Unlock Smart Living" />
    <meta property="og:description" content="Experience a new level of convenience with smart devices that transform your daily life" />
    <meta property="og:image" content="/home/smartHome.jpeg" />
    <meta property="og:url" content="https://smarta.vercel.app/" />
    <meta name="twitter:card" content="summary_large_image" />
  </Head>
    <main className="bg-gray-900 text-white"> 
      <Hero {...heroData} />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <ImageTextGrid cards={cardsData} />
      </div>
    </main>
    </>
  );
}
