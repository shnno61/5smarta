import Link from 'next/link';

interface HeroSectionProps {
  data: {
    backgroundImage: string;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
  };
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center p-4 md:p-8 lg:p-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8">
            {data.subtitle}
          </p>
          <Link
            href={data.buttonLink}
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300"
          >
            {data.buttonText}
          </Link>
        </div>
      </div>
    </section>
  );
}
