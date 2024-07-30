 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_kitchen.jpg',
  title: 'Upgrade Your Kitchen with Smart Technology',
  subtitle: 'Discover innovative smart kitchen solutions that make cooking and meal prep easier and more efficient.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Automated cooking appliances',
  'Smart recipe suggestions',
  'Remote control and monitoring',
  'Energy efficiency',
  'Convenient grocery ordering',
  'Integration with voice assistants',
  'Improved food safety',
  'Customizable cooking settings',
];

const products = [
  {
    imageSrc: '/smartHome/smartKitchen/smartOven.jpeg',
    title: 'Smart Oven Pro',
    description: 'Oven with smart features including remote control, automated cooking modes, and recipe integration.',
    link: 'https://example.com/smartOvenPro',
  },
  {
    imageSrc: '/smartHome/smartKitchen/smartFridge.jpeg',
    title: 'Smart Fridge Max',
    description: 'Fridge with advanced temperature control, inventory management, and smart grocery tracking.',
    link: 'https://example.com/smartFridgeMax',
  },
  {
    imageSrc: '/smartHome/smartKitchen/smartCoffeeMaker.jpeg',
    title: 'Smart Coffee Maker',
    description: 'Coffee maker with programmable settings, remote control, and integration with home automation systems.',
    link: 'https://example.com/smartCoffeeMaker',
  },
];

const expertQuotes = [
  {
    quote: 'Smart kitchen appliances are revolutionizing home cooking, making it more convenient, efficient, and enjoyable with technology.',
    author: 'Nina Roberts, Culinary Technologist',
  },
  {
    quote: 'From automated cooking to smart grocery tracking, the integration of technology in the kitchen offers unprecedented control and efficiency.',
    author: 'James Carter, Kitchen Appliance Expert',
  },
  {
    quote: 'With smart kitchen devices, preparing meals becomes a seamless and automated process, enhancing both convenience and quality.',
    author: 'Sophia Turner, Food Technology Specialist',
  },
];

const userTestimonials = [
  {
    quote: 'The smart oven has made cooking so much easier. I love being able to control it remotely and get recipe suggestions!',
    author: 'Emma Thompson',
  },
  {
    quote: 'The smart fridge is fantastic for keeping track of groceries and maintaining the perfect temperature for my food.',
    author: 'John Evans',
  },
];

const buyingGuideContent = `
  When choosing smart kitchen appliances, consider features like programmable settings, remote control capabilities, and energy efficiency. 
  Our buying guide helps you find the best smart devices to enhance cooking convenience and improve your kitchen’s functionality.
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
    

      <main className="relative overflow-hidden bg-gray-900 text-white">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Kitchen?">
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
