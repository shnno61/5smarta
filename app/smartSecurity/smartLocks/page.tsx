 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData  = {
  backgroundImage: '/images/hero_locks.jpg',
  title: 'Secure Your Access with Advanced Smart Locks',
  subtitle: 'Explore innovative smart locks that offer convenience, security, and remote access.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Keyless entry for ease of use',
  'Remote access and management',
  'Auto-lock and unlock features',
  'Integration with other smart security systems',
  'Biometric and RFID access options',
  'Enhanced security with encryption technology',
  'Activity logs for tracking entry and exit',
  'Easy installation and setup',
];

const products = [
  {
    imageSrc: '/smartOffice/smartSecurity/smart_lock1.jpg',
    title: 'Smart Lock Y1',
    description: 'Keyless smart lock with remote access, auto-lock feature, and integration with security systems.',
    link: 'https://example.com/smart_lock1',
  },
  {
    imageSrc: '/smartOffice/smartSecurity/smart_lock2.jpg',
    title: 'Smart Lock Y2',
    description: 'Advanced smart lock with biometric access, remote management, and high-security encryption.',
    link: 'https://example.com/smart_lock2',
  },
  // Add more smart locks here
];

const expertQuotes = [
  {
    quote: 'Smart locks offer a blend of convenience and security, providing keyless entry while maintaining high standards of encryption and access control.',
    author: 'Nina Patel, Smart Lock Specialist',
  },
  {
    quote: 'With features like remote access and auto-lock, smart locks are an essential part of modern security systems, ensuring both safety and ease of use.',
    author: 'Brian Lee, Security Tech Consultant',
  },
  // Add more expert quotes here
];

const userTestimonials  = [
  {
    quote: 'The smart lock system has made managing office access much easier. We love the convenience of remote unlocking and activity tracking.',
    author: 'Jessica Turner, Office Manager',
  },
  {
    quote: 'Our smart lock has provided enhanced security and flexibility. It’s been a great addition to our office security measures.',
    author: 'Michael Harris, Facilities Coordinator',
  },
  // Add more testimonials here
];

const buyingGuideContent  = `
  When selecting a smart lock, consider factors such as keyless entry features, remote management capabilities, and compatibility with existing security systems. Our buying guide provides helpful information to ensure you choose the best lock for your needs.
`;

const blogPosts  = [
  {
    title: 'Top Smart Locks for Office Security',
    summary: 'A review of the best smart locks for enhancing office security and convenience.',
    link: '/blog/top-smart-locks',
  },
  {
    title: 'Why Smart Locks Are a Must-Have for Modern Offices',
    summary: 'An exploration of the benefits and features of smart locks and their impact on office security.',
    link: '/blog/smart-locks-benefits',
  },
  // Add more blog posts here
];


const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Locks?">
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
