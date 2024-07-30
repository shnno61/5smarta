 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero_lighting.jpg',
  title: 'Illuminate Your Office with Advanced Smart Lighting',
  subtitle: 'Discover innovative smart lighting solutions that enhance productivity and create a comfortable workspace.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits  = [
  'Enhanced productivity with customizable lighting modes',
  'Energy-efficient and cost-effective solutions',
  'Automated lighting schedules for convenience',
  'Improved office ambiance and employee comfort',
  'Seamless integration with other smart office systems',
  'Remote control and voice command functionality',
  'Reduced eye strain with adjustable brightness',
  'Advanced security features with motion detection',
];

const products = [
  {
    imageSrc: '/smartOffice/smartLighting/desk_lamp.jpg',
    title: 'Smart LED Desk Lamp',
    description: 'Adjustable desk lamp with multiple lighting settings and remote control.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartOffice/smartLighting/ceiling_light.jpg',
    title: 'Smart Ceiling Light',
    description: 'Energy-efficient ceiling light with color temperature adjustment and scheduling capabilities.',
    link: 'https://example.com/product2',
  },
  {
    imageSrc: '/smartOffice/smartLighting/floor_lamp.jpg',
    title: 'Smart Floor Lamp',
    description: 'Modern floor lamp with smart controls and customizable lighting modes.',
    link: 'https://example.com/product3',
  },
  {
    imageSrc: '/smartOffice/smartLighting/led_strips.jpg',
    title: 'Smart LED Strip Lights',
    description: 'Flexible LED strip lights with remote control and scene settings.',
    link: 'https://example.com/product4',
  },
  // Add more products here
];

const expertQuotes  = [
  {
    quote: 'Smart lighting transforms office spaces by providing adaptable lighting solutions that improve productivity and comfort. The integration with modern technology enhances the overall office experience.',
    author: 'Laura Johnson, Workplace Efficiency Expert',
  },
  {
    quote: 'The benefits of smart lighting go beyond just energy savings; they create a more pleasant and customizable working environment, which is crucial for today’s dynamic office settings.',
    author: 'Mark Williams, Senior Smart Tech Analyst',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'Our office lighting has never been better. The ability to adjust the lighting settings has made a huge difference in our work environment.',
    author: 'Emily Davis, Office Manager',
  },
  {
    quote: 'The smart lighting solutions we installed have improved both our energy efficiency and office ambiance. Highly recommend!',
    author: 'John Carter, Operations Director',
  },
  // Add more testimonials here
];

const buyingGuideContent  = `
  When choosing smart lighting for your office, consider factors such as lighting flexibility, energy efficiency, and integration with other smart devices. Our buying guide offers insights to help you make the best choice for your workspace.
`;

const blogPosts = [
  {
    title: 'Innovative Smart Lighting Solutions for Modern Offices',
    summary: 'Explore the latest trends in smart lighting and how they can enhance your office environment.',
    link: '/blog/smart-lighting-solutions',
  },
  {
    title: 'How Smart Lighting Enhances Workplace Productivity',
    summary: 'Learn how customizable lighting can boost productivity and improve employee satisfaction in your office.',
    link: '/blog/lighting-and-productivity',
  },
  // Add more blog posts here
];



const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-gray-900 text-white">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Lighting?">
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
