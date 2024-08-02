 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero-cleaning.jpg',
  title: 'Revolutionize Your Home with Smart Cleaning Solutions',
  subtitle: 'Explore cutting-edge smart cleaning devices that offer convenience, efficiency, and a cleaner home environment.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Efficient and thorough cleaning',
  'Time-saving automation',
  'Enhanced cleaning performance',
  'Integration with smart home systems',
  'Customizable cleaning schedules',
  'Reduced manual labor',
  'Improved indoor air quality',
  'Convenient control via smartphone',
];

const products = [
  {
    imageSrc: '/smartHome/smartCleaning/robotVacuum.jpeg',
    title: 'Robot Vacuum Cleaner',
    description: 'Automatic vacuum cleaner with smart navigation and powerful suction for a spotless home.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartHome/smartCleaning/robotVacuum.jpeg',
    title: 'Smart Mop',
    description: 'Smart mop with automated cleaning and drying functions, perfect for hard floors.',
    link: 'https://example.com/product2',
  },
  {
    imageSrc: '/smartHome/smartCleaning/airPurifier.jpeg',
    title: 'Air Purifier',
    description: 'High-efficiency air purifier that removes allergens and pollutants from your home.',
    link: 'https://example.com/product3',
  },
  // Add more products here
];

const expertQuotes = [
  {
    quote: 'Smart cleaning devices like robot vacuums and smart mops are game-changers for home cleanliness. They offer an unprecedented level of convenience and efficiency, allowing you to maintain a pristine home with minimal effort.',
    author: 'Emily Johnson, Home Technology Expert',
  },
  {
    quote: 'The rise of smart cleaning solutions is transforming how we approach home maintenance. Devices that integrate with smart home systems provide a new level of control and automation, making cleaning less of a chore.',
    author: 'Alex Thompson, Senior Editor at TechReview',
  },
  {
    quote: 'With advancements in smart cleaning technology, homeowners can now enjoy cleaner spaces with less manual effort. These devices not only save time but also enhance overall home hygiene and comfort.',
    author: 'Olivia Brown, Author and Home Automation Specialist',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The robot vacuum has made a huge difference in keeping my home clean. It’s efficient and easy to use!',
    author: 'John Doe',
  },
  {
    quote: 'The smart mop is fantastic! It cleans my floors effortlessly and I love the convenience.',
    author: 'Alice Johnson',
  },
  {
    quote: 'The air purifier has improved the air quality in my home significantly. Highly recommend!',
    author: 'Michael Smith',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  Choosing the right smart cleaning devices involves evaluating features such as cleaning performance, battery life, ease of use, and integration with smart home systems. 
  Our buying guide provides insights to help you select the best products for your needs.
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

        <Section id="intro" title="Why Smart Cleaning?">
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
