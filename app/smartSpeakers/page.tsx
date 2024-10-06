 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero-cleaning.jpg',
  title: 'Elevate Your Home with Echo Smart Speakers',
  subtitle: 'Experience effortless voice control, seamless smart home integration, and enhanced daily convenience with cutting-edge Echo devices.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Efficient voice control',
  'Time-saving automation',
  'Enhanced smart home integration',
  'Customizable routines',
  'Reduced manual tasks',
  'Convenient app control',
];

const products = [
  {
    imageSrc: '/smartSpeakers/sp4.jpg',
    title: ' LeeNabao Smart LED Table Lamp',
    description: 'Mini Wireless Speaker Lamp with Alarm Clock, Wireless Charging, Atmosphere Light, Bedside Table Lamp Gifts',
    link: 'https://amzn.to/3YcCCnd',
  },
  {
    imageSrc: '/smartSpeakers/sp1.jpg',
    title: 'Amazon Echo Dot',
    description: '(5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal',
    link: 'https://amzn.to/3Z4Ijoj',
  },
  {
    imageSrc: '/smartSpeakers/sp2.jpg',
    title: 'Amazon Echo Pop',
    description: 'Alexa fits in anywhere: bedroom, living room, bathroom, office, and small spaces | Lavender Bloom',
    link: 'https://amzn.to/3Mou7yX',
  },
  {
    imageSrc: '/smartSpeakers/sp3.jpg',
    title: 'Amazon Echo Spot',
    description: 'Bedside smart alarm clock + Alexa, distraction-reduced display, Black',
    link: 'https://amzn.to/3XdKsvo',
  },
  // Add more products here
];

 

 
const buyingGuideContent = `
Choosing the right Echo smart speakers involves evaluating factors such as sound quality, voice recognition accuracy, ease of setup, and integration with your smart home devices.`;

const blogPosts = [
  {
    title: 'The impact of everyday AI-based smart speaker use on',
    summary: 'This study examined the association between the use of AI speakers and depression and loneliness in older adults living alone.',
    link: 'https://www.sciencedirect.com/science/article/abs/pii/S0160791X22002743',
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
