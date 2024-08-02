 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_glasses.jpg',
  title: 'Experience the Future with Smart Glasses',
  subtitle: 'Explore innovative smart glasses that enhance your vision and keep you connected.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Augmented reality for enhanced vision',
  'Hands-free notifications and navigation',
  'Integration with smartphones and other devices',
  'Voice control for easy operation',
  'Lightweight and stylish designs',
  'Built-in cameras for photos and videos',
  'Health and fitness tracking capabilities',
  'Extended battery life for all-day use',
];

const products = [
  {
    imageSrc: '/images/smart_glasses1.jpg',
    title: 'Augmented Reality Smart Glasses',
    description: 'Experience augmented reality with these cutting-edge smart glasses.',
    link: 'https://example.com/smart_glasses1',
  },
  {
    imageSrc: '/images/smart_glasses2.jpg',
    title: 'Smart Glasses with Voice Control',
    description: 'Stay connected and hands-free with these stylish smart glasses.',
    link: 'https://example.com/smart_glasses2',
  },
  // Add more smart glasses here
];

const expertQuotes = [
  {
    quote: 'Smart glasses are transforming the way we interact with the world, providing valuable information at a glance.',
    author: 'Sarah Johnson, AR Specialist',
  },
  {
    quote: 'The convenience and functionality of smart glasses make them an essential gadget for tech enthusiasts.',
    author: 'Michael Lee, Tech Blogger',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'These smart glasses have made my daily commute so much easier. The navigation feature is a game-changer.',
    author: 'Emily Roberts, Commuter',
  },
  {
    quote: 'I love being able to take photos and videos hands-free with my smart glasses. So convenient!',
    author: 'David Smith, Photographer',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  When selecting smart glasses, consider features such as augmented reality capabilities, compatibility with your devices, and battery life. Our buying guide offers tips to help you find the perfect pair.
`;

const blogPosts = [
  {
    title: 'The Future of Augmented Reality with Smart Glasses',
    summary: 'Explore the potential of augmented reality and how smart glasses are leading the way.',
    link: '/blog/future-ar-smart-glasses',
  },
  {
    title: 'How to Choose the Best Smart Glasses for Your Needs',
    summary: 'A comprehensive guide to selecting the right smart glasses for your lifestyle.',
    link: '/blog/choosing-smart-glasses',
  },
  // Add more blog posts here
];



const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Glasses?">
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
