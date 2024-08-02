 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_security.jpg',
  title: 'Secure Your Home with Advanced Smart Technology',
  subtitle: 'Explore top-rated smart security solutions to keep your home safe and secure around the clock.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  '24/7 monitoring and alerts',
  'Real-time video surveillance',
  'Remote access and control',
  'Integration with smart home systems',
  'Advanced motion detection',
  'Automated security settings',
  'Emergency response features',
  'Enhanced privacy protection',
];

const products = [
  {
    imageSrc: '/smartHome/smartSecurity/smartCamera.jpeg',
    title: 'Smart Security Camera',
    description: 'High-definition security camera with real-time streaming and motion detection.',
    link: 'https://example.com/smartSecurityCamera',
  },
  {
    imageSrc: '/smartHome/smartSecurity/smartLock.jpeg',
    title: 'Smart Door Lock',
    description: 'Electronic door lock with remote access, keyless entry, and security alerts.',
    link: 'https://example.com/smartDoorLock',
  },
  {
    imageSrc: '/smartHome/smartSecurity/smartAlarm.jpeg',
    title: 'Smart Alarm System',
    description: 'Comprehensive alarm system with real-time alerts and integration with home automation.',
    link: 'https://example.com/smartAlarmSystem',
  },
];

const expertQuotes = [
  {
    quote: 'Smart security systems provide peace of mind with their advanced monitoring and real-time alerts, ensuring your home is always protected.',
    author: 'Robert Hughes, Security Technology Expert',
  },
  {
    quote: 'The integration of smart security devices into home systems offers unparalleled convenience and safety, making it easier to manage your home’s security.',
    author: 'Linda Walker, Home Security Specialist',
  },
  {
    quote: 'With the latest advancements in smart security technology, you can now monitor and control your home’s security from anywhere, anytime.',
    author: 'David Lewis, Security Solutions Consultant',
  },
];

const userTestimonials = [
  {
    quote: 'The smart security camera gives me complete peace of mind. I can check in on my home anytime, anywhere.',
    author: 'Linda Davis',
  },
  {
    quote: 'The smart lock is incredibly convenient and secure. I love the keyless entry feature and remote access.',
    author: 'James Wilson',
  },
];

const buyingGuideContent = `
  To select the right smart security system, evaluate factors such as camera resolution, motion detection capabilities, and integration with other smart home devices. 
  Our buying guide offers insights on choosing security products that provide comprehensive protection and peace of mind for your home.
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

        <Section id="intro" title="Why Smart Security?">
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
