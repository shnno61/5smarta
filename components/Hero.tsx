import Image from 'next/image';

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const Hero = ({ title, description, imageSrc, imageAlt }: HeroProps) => (
  <section className="min-h-screen bg-cover bg-center bg-no-repeat relative padding-container flex flex-col gap-6 py-10 md:gap-10 lg:py-20 xl:flex-row xl:gap-10 2xl:py-28 3xl:py-32 4xl:py-40 text-gray-800" style={{ backgroundImage: "url('/home/hero.jpg')" }}>
    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center">
        <div className="text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-4xl text-blue-600 sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
             Unlock Smart Living
          </h1>
          <p className="m-7  text-lg text-white sm:text-xl md:text-2xl mb-8">
          Experience the ease of smart living with devices that simplify daily tasks, enhance comfort, and bring security to your home—all at your fingertips.
          </p>
           
        </div>
      </div>
     
  </section>
);

export default Hero;
