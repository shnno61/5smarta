 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData  = {
  backgroundImage: '/images/hero_rings.jpg',
  title: 'Elevate Your Style with Smart Rings',
  subtitle: 'Discover smart rings that combine fashion with functionality for a seamless experience.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Health and activity tracking',
  'Mobile payment capabilities',
  'Notifications and alerts',
  'Integration with smartphones and other devices',
  'Stylish and discreet designs',
  'Long battery life',
  'Durable and water-resistant materials',
  'Easy-to-use controls',
];

const products = [
  {
    imageSrc: '/images/smart_ring1.jpg',
    title: 'Health Tracking Smart Ring',
    description: 'Monitor your health and activity with this sleek smart ring.',
    link: 'https://example.com/smart_ring1',
  },
  {
    imageSrc: '/images/smart_ring2.jpg',
    title: 'Smart Ring with Mobile Payments',
    description: 'Make payments on the go with this stylish and functional smart ring.',
    link: 'https://example.com/smart_ring2',
  },
  // Add more smart rings here
];

const expertQuotes = [
  {
    quote: 'Smart rings offer a discreet and stylish way to stay connected and monitor your health.',
    author: 'Jessica Brown, Wearable Technology Expert',
  },
  {
    quote: 'The compact design and advanced features of smart rings make them a must-have accessory.',
    author: 'Daniel Green, Tech Enthusiast',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'My smart ring is amazing! It tracks my activity and looks great with any outfit.',
    author: 'Sophia Williams, Fashion Enthusiast',
  },
  {
    quote: 'The mobile payment feature on my smart ring is so convenient. I use it all the time.',
    author: 'James Taylor, Busy Professional',
  },
  // Add more testimonials here
];

const buyingGuideContent  = `
  When choosing a smart ring, consider features such as health tracking, mobile payments, and design. Our buying guide provides helpful tips to find the perfect smart ring for your needs.
`;

const blogPosts = [
  {
    title: 'The Benefits of Wearing a Smart Ring',
    summary: 'Learn how smart rings can enhance your daily life with their advanced features.',
    link: '/blog/benefits-smart-rings',
  },
  {
    title: 'How to Select the Perfect Smart Ring',
    summary: 'Tips and advice for choosing a smart ring that fits your style and needs.',
    link: '/blog/selecting-smart-ring',
  },
  // Add more blog posts here
];



const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Rings?">
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
