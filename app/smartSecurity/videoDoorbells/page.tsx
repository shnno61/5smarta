 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero_doorbells.jpg',
  title: 'Elevate Your Security with Smart Video Doorbells',
  subtitle: 'Discover video doorbells that offer real-time video, two-way audio, and enhanced security features.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'High-definition video for clear entryway surveillance',
  'Two-way audio for communication with visitors',
  'Motion detection and real-time notifications',
  'Remote access and control via smartphone',
  'Integration with home security systems',
  'Night vision for around-the-clock monitoring',
  'Cloud storage for video recordings',
  'Easy installation and setup',
];

const products = [
  {
    imageSrc: '/images/video_doorbell1.jpg',
    title: 'HD Video Doorbell',
    description: 'Smart video doorbell with high-definition video, two-way audio, and motion detection alerts.',
    link: 'https://example.com/video_doorbell1',
  },
  {
    imageSrc: '/images/video_doorbell2.jpg',
    title: 'Wireless Video Doorbell',
    description: 'Wireless video doorbell with HD video, night vision, and cloud storage.',
    link: 'https://example.com/video_doorbell2',
  },
  // Add more video doorbells here
];

const expertQuotes = [
  {
    quote: 'Smart video doorbells offer enhanced security by allowing you to see and communicate with visitors from anywhere.',
    author: 'Sophia Allen, Home Security Specialist',
  },
  {
    quote: 'The integration of video doorbells into your security system provides an additional layer of protection for your home.',
    author: 'Liam Martinez, Smart Home Expert',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The video doorbell has improved our home security and convenience. It’s great to see who’s at the door even when I’m not home.',
    author: 'Samantha Johnson, Homeowner',
  },
  {
    quote: 'The two-way audio feature is incredibly useful for communicating with visitors. Highly recommend this doorbell.',
    author: 'Brian Davis, Property Owner',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  When selecting a video doorbell, look for features such as video resolution, two-way audio, and integration with your security system. Our buying guide provides detailed advice to help you make an informed choice.
`;

const blogPosts = [
  {
    title: 'Why Video Doorbells Are a Must-Have for Home Security',
    summary: 'Explore the benefits of video doorbells and how they can enhance your home security setup.',
    link: '/blog/why-video-doorbells',
  },
  {
    title: 'How to Choose the Perfect Video Doorbell for Your Home',
    summary: 'Tips for selecting a video doorbell that meets your security and convenience needs.',
    link: '/blog/choosing-video-doorbell',
  },
  // Add more blog posts here
];




const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-gray-900 text-white">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart VideoDoorbells?">
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
