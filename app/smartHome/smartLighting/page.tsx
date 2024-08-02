 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero.jpg',
  title: 'Illuminate Your Home with Cutting-Edge Smart Lighting',
  subtitle: 'Discover top-rated smart lighting solutions that offer convenience and energy efficiency.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Energy efficiency',
  'Convenience and automation',
  'Enhanced home security',
  'Customization and ambiance',
  'Integration with other smart devices',
  'Improved well-being',
  'Cost savings over time',
  'Future-proofing your home',
];

const products = [
  {
    imageSrc: '/smartHome/smartLighting/smartLighting.jpeg',
    title: 'Smart Light Bulb',
    description: 'Energy-efficient and customizable lighting solution for any room.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartLighting.jpeg',
    title: 'Smart Light Bulb',
    description: 'Energy-efficient and customizable lighting solution for any room.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartLighting.jpeg',
    title: 'Smart Light Bulb',
    description: 'Energy-efficient and customizable lighting solution for any room.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartLighting.jpeg',
    title: 'Smart Light Bulb',
    description: 'Energy-efficient and customizable lighting solution for any room.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartLighting.jpeg',
    title: 'Smart Light Bulb',
    description: 'Energy-efficient and customizable lighting solution for any room.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartLighting.jpeg',
    title: 'Smart Light Bulb',
    description: 'Energy-efficient and customizable lighting solution for any room.',
    link: 'https://example.com/product1',
  },
  // Add more products here
];

const expertQuotes = [
  {
    quote: 'Smart lighting is one of the most accessible and transformative elements of a smart home. With products like Philips Hue and LIFX, users can easily customize their lighting to fit their mood, improve their home\'s security, and save on energy costs. These systems integrate seamlessly with other smart home devices, making them a central piece of home automation.',
    author: 'Stacey Higginbotham, Host of the "Internet of Things" Podcast',
  },
  {
    quote: 'The advancements in smart lighting technology have made it possible to create the perfect ambiance for any occasion with just a few taps on your phone or a voice command. Philips Hue remains the gold standard, offering a wide range of products that work reliably and integrate well with other smart home ecosystems like Amazon Alexa, Google Assistant, and Apple HomeKit.',
    author: 'Chris Monroe, Senior Editor at CNET\'s Smart Home Section',
  },
  {
    quote: 'Smart lighting is revolutionizing the way we interact with our homes. It\'s not just about turning lights on and off anymore. You can program lights to match your mood, automate them to save energy, and even use them as a security feature. It\'s a blend of convenience, efficiency, and innovation that brings new life to home lighting.',
    author: 'David Pogue, Tech Columnist and TV Host',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The smart lighting system has transformed my home. It’s incredibly easy to use and the energy savings are significant!',
    author: 'Jane Smith',
  },
  {
    quote: 'The smart lighting system has transformed my home. It’s incredibly easy to use and the energy savings are significant!',
    author: 'Jane Smith',
  },
  {
    quote: 'The smart lighting system has transformed my home. It’s incredibly easy to use and the energy savings are significant!',
    author: 'Jane Smith',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  Choosing the right smart lighting involves considering factors such as compatibility with existing systems, control options, and energy efficiency. 
  Our buying guide helps you make an informed decision.
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

        <Section id="intro" title="Why Smart Lighting?">
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
