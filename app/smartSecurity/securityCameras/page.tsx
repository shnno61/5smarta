 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData  = {
  backgroundImage: '/images/hero_cameras.jpg',
  title: 'Monitor Your Space with Cutting-Edge Security Cameras',
  subtitle: 'Discover top-of-the-line smart security cameras designed for clear, reliable surveillance.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits  = [
  'High-definition video quality for clear surveillance',
  'Night vision capabilities for 24/7 monitoring',
  'Motion detection with real-time alerts',
  'Remote access and control from your smartphone',
  'Seamless integration with other smart security systems',
  'Easy installation and setup',
  'Cloud storage options for video recordings',
  'Advanced AI features for intelligent alerts',
];

const products  = [
  {
    imageSrc: '/smartOffice/smartSecurity/security_camera1.jpg',
    title: 'Smart Security Camera X1',
    description: 'High-definition camera with night vision, motion detection, and remote monitoring.',
    link: 'https://example.com/security_camera1',
  },
  {
    imageSrc: '/smartOffice/smartSecurity/security_camera2.jpg',
    title: 'Smart Security Camera X2',
    description: 'Advanced security camera with 4K resolution and integrated AI for intelligent alerts.',
    link: 'https://example.com/security_camera2',
  },
  // Add more security cameras here
];

const expertQuotes  = [
  {
    quote: 'Modern security cameras provide unparalleled clarity and real-time monitoring, making them essential for any comprehensive security system.',
    author: 'David Roberts, Security Technology Specialist',
  },
  {
    quote: 'The integration of AI with smart cameras allows for smarter alerts and better overall surveillance, enhancing office security.',
    author: 'Linda Green, Security Systems Analyst',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The clarity of the smart security camera is impressive. It has significantly improved our ability to monitor the office remotely.',
    author: 'Rachel Adams, Facilities Manager',
  },
  {
    quote: 'Our new security camera system provides excellent night vision and real-time alerts. It’s a valuable addition to our security setup.',
    author: 'Tom Wilson, Office Administrator',
  },
  // Add more testimonials here
];

const buyingGuideContent  = `
  When choosing a smart security camera, consider factors such as video resolution, night vision capabilities, and integration with your existing security systems. Our buying guide offers detailed insights to help you select the best camera for your needs.
`;

const blogPosts  = [
  {
    title: 'The Best Security Cameras for Office Safety',
    summary: 'A comprehensive guide to the top security cameras available and how they can enhance office security.',
    link: '/blog/best-security-cameras',
  },
  {
    title: 'How to Choose the Right Security Camera for Your Office',
    summary: 'Tips and recommendations for selecting a security camera that meets your specific needs.',
    link: '/blog/choosing-security-camera',
  },
  // Add more blog posts here
];


const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-gray-900 text-white">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Cameras?">
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
