 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero_security.jpg',
  title: 'Secure Your Office with State-of-the-Art Smart Security',
  subtitle: 'Explore advanced smart security solutions designed to protect your office and give you peace of mind.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Enhanced security and surveillance',
  'Real-time alerts and monitoring',
  'Remote access and control',
  'Integration with other smart office devices',
  'Improved safety for employees',
  'Ease of installation and management',
  'Customizable security settings',
  '24/7 protection',
];

const products = [
  {
    imageSrc: '/smartOffice/smartSecurity/camera1.jpg',
    title: 'Smart Security Camera X1',
    description: 'High-definition security camera with night vision and motion detection.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartOffice/smartSecurity/alarm1.jpg',
    title: 'Smart Alarm System Y2',
    description: 'Advanced alarm system with remote notifications and easy installation.',
    link: 'https://example.com/product2',
  },
  // Add more products here
];

const expertQuotes = [
  {
    quote: 'Smart security systems offer unmatched protection and convenience for office environments. From cameras to alarm systems, these devices integrate seamlessly with other smart technologies.',
    author: 'Sarah Lee, Security Technology Specialist',
  },
  {
    quote: 'Modern smart security systems provide comprehensive protection with features like real-time alerts and remote monitoring. They’re essential for maintaining a secure and efficient office environment.',
    author: 'Mark Johnson, Tech Analyst',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The smart security system gives me peace of mind. I can monitor the office from anywhere, and the integration with other devices is seamless.',
    author: 'Emily Davis',
  },
  {
    quote: 'Installation was straightforward, and the system works perfectly. I feel much safer knowing that my office is well-protected.',
    author: 'James Brown',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  Selecting the right smart security system involves evaluating factors such as camera quality, alarm features, and compatibility with existing systems. Our guide will help you choose the best solution for your office.
`;

const blogPosts = [
  {
    title: 'Top Features to Look for in Smart Security Systems',
    summary: 'Learn about the essential features that make smart security systems ideal for office environments.',
    link: '/blog/smart-security-features',
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
