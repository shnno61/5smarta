 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData  = {
  backgroundImage: '/images/hero_systems.jpg',
  title: 'Complete Your Security with Advanced Systems',
  subtitle: 'Explore comprehensive security systems that offer full coverage and integration for total peace of mind.',
  buttonText: 'Explore products',
  buttonLink: '#products',
};

const benefits  = [
  'Comprehensive coverage for your entire property',
  'Integration with cameras, locks, and doorbells',
  'Real-time alerts and monitoring',
  'Remote control and management',
  'Customizable security settings',
  '24/7 professional monitoring options',
  'Easy installation and scalability',
  'Enhanced protection with multiple security layers',
];

const products  = [
  {
    imageSrc: '/smartOffice/smartSecurity/security_system1.jpg',
    title: 'Smart Security System A1',
    description: 'Comprehensive security system with sensors, alarms, and remote control for full office protection.',
    link: 'https://example.com/security_system1',
  },
  {
    imageSrc: '/smartOffice/smartSecurity/security_system2.jpg',
    title: 'Smart Security System A2',
    description: 'Advanced security system with customizable settings, professional monitoring, and integration with other smart devices.',
    link: 'https://example.com/security_system2',
  },
  // Add more security systems here
];

const expertQuotes = [
  {
    quote: 'A complete security system provides the most comprehensive protection, integrating various security devices into one cohesive solution.',
    author: 'Samantha Clark, Security Solutions Specialist',
  },
  {
    quote: 'The value of a well-integrated security system lies in its ability to offer complete coverage and real-time control, enhancing overall safety and convenience.',
    author: 'Michael Adams, Security Systems Consultant',
  },
  // Add more expert quotes here
];

const userTestimonials  = [
  {
    quote: 'The security system has given us peace of mind with its comprehensive coverage and easy remote management. It’s an excellent investment for our office.',
    author: 'Laura White, Office Director',
  },
  {
    quote: 'Our integrated security system has significantly improved our ability to monitor and protect the office. Highly recommend it to other businesses.',
    author: 'Paul Johnson, Operations Manager',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  When selecting a security system, consider features like coverage, integration with other devices, and monitoring options. Our buying guide provides insights to help you choose a system that fits your security needs.
`;

const blogPosts = [
  {
    title: 'Why a Comprehensive Security System is Essential for Your Office',
    summary: 'Explore the advantages of a complete security system and how it enhances office safety.',
    link: '/blog/comprehensive-security-system',
  },
  {
    title: 'Choosing the Right Security System for Your Business',
    summary: 'Tips for selecting a security system that meets your office’s unique needs and requirements.',
    link: '/blog/choosing-security-system',
  },
  // Add more blog posts here
];



const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-gray-900 text-white">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Security Systems?">
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
