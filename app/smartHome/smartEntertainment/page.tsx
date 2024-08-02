 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero_entertainment.jpg',
  title: 'Revolutionize Your Entertainment with Smart Technology',
  subtitle: 'Discover cutting-edge smart entertainment solutions for a better viewing and listening experience.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Enhanced audio and video quality',
  'Seamless integration with streaming services',
  'Voice control and smart assistants',
  'Automated content recommendations',
  'Multi-room audio and video distribution',
  'Convenient remote control via smartphone',
  'Easy setup and configuration',
  'Compatibility with various devices',
];

const products = [
  {
    imageSrc: '/smartHome/smartEntertainment/smartSpeaker.jpeg',
    title: 'Smart Speaker Pro',
    description: 'High-fidelity smart speaker with voice control and streaming capabilities.',
    link: 'https://example.com/smartSpeakerPro',
  },
  {
    imageSrc: '/smartHome/smartEntertainment/smartTV.jpeg',
    title: 'Smart TV Ultra',
    description: '4K Smart TV with integrated streaming services and voice assistant support.',
    link: 'https://example.com/smartTVUltra',
  },
  {
    imageSrc: '/smartHome/smartEntertainment/soundbar.jpeg',
    title: 'Smart Soundbar X',
    description: 'Advanced soundbar for immersive audio experience with smart features.',
    link: 'https://example.com/smartSoundbarX',
  },
];

const expertQuotes = [
  {
    quote: 'Smart entertainment systems are transforming the way we experience media, offering unparalleled quality and convenience through advanced technology.',
    author: 'Alex Johnson, Tech Analyst',
  },
  {
    quote: 'With smart entertainment devices, you can control your media experience with your voice and enjoy a fully immersive experience like never before.',
    author: 'Rachel Lee, Entertainment Technology Expert',
  },
  {
    quote: 'The integration of smart technology into home entertainment setups allows for a seamless and personalized viewing and listening experience.',
    author: 'Mark Stevens, Smart Home Specialist',
  },
];

const userTestimonials = [
  {
    quote: 'Our smart speaker has changed the way we enjoy music and podcasts. The sound quality is amazing, and voice control is a game-changer!',
    author: 'Sarah Thompson',
  },
  {
    quote: 'The smart TV has brought our movie nights to a new level. The ease of accessing streaming services and the picture quality is outstanding.',
    author: 'David Miller',
  },
];

const buyingGuideContent = `
  Choosing the right smart entertainment devices involves considering factors such as audio and video quality, compatibility with streaming services, and integration with smart home systems. 
  Our buying guide helps you select products that deliver superior sound and visual experiences while fitting seamlessly into your entertainment setup.
`;
const blogPosts = [
  {
    title: 'Top Smart Cleaning Devices for 2024',
    summary: 'Discover the best smart cleaning devices available this year and how they can make your home maintenance easier and more efficient.',
    link: '/blog/smart-cleaning-devices',
  },
  {
    title: 'How Smart Cleaning Devices Can Save You Time',
    summary: 'Learn how smart cleaning technology can streamline your cleaning routines and free up your time for other activities.',
    link: '/blog/time-saving-cleaning',
  },
  {
    title: 'The Benefits of Integrating Smart Cleaning with Your Smart Home',
    summary: 'Explore the advantages of incorporating smart cleaning devices into your existing smart home setup for a more seamless experience.',
    link: '/blog/smart-cleaning-integration',
  },
  // Add more blog posts here
];





const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Entertainment?">
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
