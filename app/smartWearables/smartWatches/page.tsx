 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_watches.jpg',
  title: 'Stay Connected and Healthy with Smart Watches',
  subtitle: 'Discover the latest smart watches that offer advanced health tracking, notifications, and more.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Comprehensive health and fitness tracking',
  'Instant notifications for calls, messages, and apps',
  'Built-in GPS for navigation and tracking',
  'Water-resistant designs for active lifestyles',
  'Customizable watch faces and bands',
  'Long battery life with fast charging',
  'Music control and playback',
  'Integration with smart home devices',
];

const products = [
  {
    imageSrc: '/images/smart_watch1.jpg',
    title: 'Advanced Fitness Smart Watch',
    description: 'Track your fitness goals with precision using this advanced smart watch.',
    link: 'https://example.com/smart_watch1',
  },
  {
    imageSrc: '/images/smart_watch2.jpg',
    title: 'Stylish Smart Watch with GPS',
    description: 'Stay on track with built-in GPS and a sleek, stylish design.',
    link: 'https://example.com/smart_watch2',
  },
  // Add more smart watches here
];

const expertQuotes = [
  {
    quote: 'Smart watches have revolutionized the way we track our health and stay connected on the go.',
    author: 'Dr. Jane Smith, Health Technology Expert',
  },
  {
    quote: 'The integration of smart watches with other devices makes them a versatile tool for modern life.',
    author: 'Tom Brown, Tech Analyst',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'I love my smart watch! It helps me stay on top of my fitness goals and keeps me connected.',
    author: 'Anna Lee, Fitness Enthusiast',
  },
  {
    quote: 'The GPS feature is fantastic for my outdoor runs. Highly recommend this smart watch!',
    author: 'John Doe, Runner',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  When choosing a smart watch, consider factors such as health tracking features, battery life, and compatibility with your smartphone. Our buying guide provides valuable insights to help you make the best choice.
`;

const blogPosts = [
  {
    title: 'Top Features to Look for in a Smart Watch',
    summary: 'Discover the key features that make smart watches a must-have device.',
    link: '/blog/features-smart-watches',
  },
  {
    title: 'How Smart Watches Can Improve Your Fitness Routine',
    summary: 'Learn how smart watches can help you stay motivated and achieve your fitness goals.',
    link: '/blog/smart-watches-fitness',
  },
  // Add more blog posts here
];


const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-gray-900 text-white">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Watches?">
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
