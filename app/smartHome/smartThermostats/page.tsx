 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_thermostats.jpg',
  title: 'Optimize Your Home’s Comfort with Smart Thermostats',
  subtitle: 'Experience optimal temperature control with advanced smart thermostats that adapt to your needs.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Automatic temperature adjustments',
  'Energy savings and efficiency',
  'Remote control via smartphone',
  'Integration with smart home systems',
  'Customizable temperature schedules',
  'Learning algorithms for improved comfort',
  'Real-time temperature monitoring',
  'Easy installation and setup',
];

const products = [
  {
    imageSrc: '/smartHome/smartThermostats/smartThermostat1.jpeg',
    title: 'Smart Thermostat Pro',
    description: 'Advanced thermostat with learning capabilities and remote control features.',
    link: 'https://example.com/smartThermostatPro',
  },
  {
    imageSrc: '/smartHome/smartThermostats/smartThermostat2.jpeg',
    title: 'Smart Thermostat Max',
    description: 'High-performance thermostat with energy-saving modes and integration with smart home systems.',
    link: 'https://example.com/smartThermostatMax',
  },
  {
    imageSrc: '/smartHome/smartThermostats/smartThermostat3.jpeg',
    title: 'Smart Thermostat Plus',
    description: 'Feature-rich thermostat with customizable schedules and real-time temperature monitoring.',
    link: 'https://example.com/smartThermostatPlus',
  },
];

const expertQuotes = [
  {
    quote: 'Smart thermostats are revolutionizing home comfort by providing precise temperature control and energy savings through advanced technology.',
    author: 'Grace Williams, HVAC Specialist',
  },
  {
    quote: 'With smart thermostats, you can automate and customize your home’s climate to suit your preferences, all while saving on energy costs.',
    author: 'Paul Anderson, Energy Efficiency Expert',
  },
  {
    quote: 'The integration of learning algorithms in smart thermostats enhances both comfort and efficiency, adapting to your lifestyle and preferences.',
    author: 'Natalie Adams, Smart Home Consultant',
  },
];

const userTestimonials = [
  {
    quote: 'The smart thermostat has made my home so much more comfortable. I love being able to control it from my phone and see the energy savings!',
    author: 'Laura Brown',
  },
  {
    quote: 'The thermostat’s learning feature is impressive. It adjusts automatically to my schedule and keeps my home at the perfect temperature.',
    author: 'Daniel Clark',
  },
];

const buyingGuideContent = `
  Choosing a smart thermostat involves assessing features such as energy-saving algorithms, remote control capabilities, and compatibility with your home’s heating and cooling systems. 
  Our buying guide helps you find the best thermostat to optimize comfort and efficiency while saving on energy costs.
`;
const blogPosts = [
  {
    title: 'The Latest Trends in Smart Lighting',
    summary: 'Stay updated on the latest innovations and trends in smart lighting technology. Learn how new advancements can enhance your home.',
    link: '/blog/latest-trends',
  },
  {
    title: 'The Latest Trends in Smart Lighting',
    summary: 'Stay updated on the latest innovations and trends in smart lighting technology. Learn how new advancements can enhance your home.',
    link: '/blog/latest-trends',
  },
  {
    title: 'The Latest Trends in Smart Lighting',
    summary: 'Stay updated on the latest innovations and trends in smart lighting technology. Learn how new advancements can enhance your home.',
    link: '/blog/latest-trends',
  },
  // Add more blog posts here
];



const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Thermostats?">
        <BenefitsList benefits={benefits} />
      </Section>
 

      <Section id="experts" title="Expert Opinions" className="bg-white">
          <div className="space-y-6">
            {expertQuotes.map((expertQuotes, index) => (
              <QuoteCard
                key={index}
                quote={expertQuotes.quote}
                author={expertQuotes.author}
              />
            ))}
          </div>
        </Section>

        <Section id="reviews" title="User Experiences">
          <div className="space-y-6">
            {userTestimonials.map((testimonial, index) => (
              <QuoteCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
              />
            ))}
          </div>
        </Section>

        <Section id="products" title="Recommended Products">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                description={product.description}
                link={product.link}
              />
            ))}
          </div>
        </Section>

        <Section id="guide" title="Buying Guide" className="bg-gray-300">
           
           <p className="text-lg mb-4">{buyingGuideContent}</p>
         
       </Section>

        {/* <Section id="blog" title="Blogs">
          <BlogSection posts={blogPosts} />
        </Section> */}

        <Section id="blog" title="Blogs">
          <BlogSection posts={blogPosts} />
        </Section>
      </main>

     
    </>
  );
};

export default Page;
