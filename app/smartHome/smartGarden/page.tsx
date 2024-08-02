 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_garden.jpg',
  title: 'Enhance Your Garden with Smart Solutions',
  subtitle: 'Explore innovative smart garden technologies to keep your garden lush and thriving with minimal effort.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Automated irrigation systems',
  'Smart plant monitoring',
  'Weather-responsive adjustments',
  'Efficient water usage',
  'Remote control and scheduling',
  'Enhanced plant health tracking',
  'Integration with home automation',
  'Customizable settings for different plants',
];

const products = [
  {
    imageSrc: '/smartHome/smartGarden/smartIrrigation.jpeg',
    title: 'Smart Irrigation System',
    description: 'Automated irrigation system with real-time monitoring and scheduling.',
    link: 'https://example.com/smartIrrigation',
  },
  {
    imageSrc: '/smartHome/smartGarden/plantSensor.jpeg',
    title: 'Smart Plant Sensor',
    description: 'Sensor that monitors soil moisture, light, and temperature for optimal plant care.',
    link: 'https://example.com/smartPlantSensor',
  },
  {
    imageSrc: '/smartHome/smartGarden/gardenLight.jpeg',
    title: 'Smart Garden Light',
    description: 'Energy-efficient garden lights with remote control and scheduling capabilities.',
    link: 'https://example.com/smartGardenLight',
  },
];

const expertQuotes = [
  {
    quote: 'Smart garden technology simplifies garden maintenance, ensuring that your plants get the care they need while saving you time and effort.',
    author: 'Emma Clark, Horticulture Expert',
  },
  {
    quote: 'With smart garden solutions, you can optimize your garden’s health and aesthetics through advanced technology and automation.',
    author: 'Lucas Adams, Landscape Architect',
  },
  {
    quote: 'From automated watering to real-time plant monitoring, smart garden tools provide a more efficient and enjoyable gardening experience.',
    author: 'Olivia Martinez, Garden Technology Specialist',
  },
];

const userTestimonials = [
  {
    quote: 'The smart irrigation system has taken the hassle out of watering my garden. It’s efficient and I love the control I have from my phone.',
    author: 'Michael Green',
  },
  {
    quote: 'The plant sensors are a game-changer. I can monitor my plants’ needs and keep them healthy with minimal effort.',
    author: 'Laura Wilson',
  },
];

const buyingGuideContent = `
  Selecting smart garden solutions requires evaluating features such as automated irrigation, soil moisture monitoring, and integration with home automation systems. 
  Our buying guide provides tips on choosing the best devices to maintain a healthy garden with minimal effort and optimize water usage.
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

        <Section id="intro" title="Why Smart Garden?">
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
