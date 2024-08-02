 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero_thermostats.jpg',
  title: 'Optimize Your Office with Advanced Smart Thermostats',
  subtitle: 'Explore cutting-edge smart thermostats designed to enhance comfort and efficiency in your workspace.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Energy savings and cost reduction',
  'Remote control and automation',
  'Improved HVAC system efficiency',
  'Customized comfort settings',
  'Integration with other smart office devices',
  'Enhanced employee comfort',
  'Real-time temperature monitoring',
  'Easy installation and management',
];

const products = [
  {
    imageSrc: '/smartOffice/smartThermostats/thermostat1.jpg',
    title: 'Smart Thermostat A1',
    description: 'Energy-efficient thermostat with programmable scheduling and remote access.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartOffice/smartThermostats/thermostat2.jpg',
    title: 'Smart Thermostat B2',
    description: 'Advanced thermostat with voice control and adaptive learning features.',
    link: 'https://example.com/product2',
  },
  // Add more products here
];

const expertQuotes = [
  {
    quote: 'Smart thermostats are a game-changer for office environments. They provide unparalleled control over your climate, reducing energy costs while enhancing comfort.',
    author: 'John Doe, HVAC Specialist',
  },
  {
    quote: 'The latest smart thermostats offer sophisticated features like learning algorithms and remote access, making them essential for modern offices.',
    author: 'Jane Smith, Smart Building Expert',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The smart thermostat has made managing office temperatures effortless. It’s intuitive and saves us money on energy bills!',
    author: 'Alice Johnson',
  },
  {
    quote: 'Installing the smart thermostat was a breeze, and the improvements in office comfort are noticeable.',
    author: 'Bob Williams',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  Choosing the right smart thermostat involves evaluating features such as compatibility with your HVAC system, ease of installation, and connectivity options. Our guide will help you make an informed choice for your office.
`;

const blogPosts = [
  {
    title: 'Top Smart Thermostat Features for Modern Offices',
    summary: 'Discover the essential features that make smart thermostats perfect for office environments.',
    link: '/blog/smart-thermostat-features',
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
 

        <Section id="experts" title="Expert Opinions" className="bg-gray-800">
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

        <Section id="guide" title="Buying Guide" className="bg-gray-800">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95">
            <p className="text-lg mb-4">{buyingGuideContent}</p>
          </div>
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
