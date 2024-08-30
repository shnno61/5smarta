 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
import ComparisonSection from '@/components/ComparisonSection';
 

const heroData = {
  backgroundImage: '/images/hero.jpg',
  title: 'Illuminate Your Life with Cutting-Edge Smart Lighting',
  subtitle: 'Discover top-rated smart lighting solutions that offer convenience and energy efficiency.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Energy efficiency',
  'Convenience and automation',
  'Customization and ambiance',
  'Integration with other smart devices',
  'Improved well-being',
  'Cost savings over time',
  'Future-proofing your home',
];

const products = [
  {
    imageSrc: '/smartLighting/smartlighting1.jpg',
    title: 'Sengled Alexa Smart Bulb',
    description: 'S1 auto-pairing with Alexa, warm light, Bluetooth Mesh, E26, 60W equivalent, 800LM.',
    link: 'https://amzn.to/4dHUrQj',
  },
  {
    imageSrc: '/smartLighting/smartlighting2.jpg',
    title: 'Philips Hue Smart Bulb',
    description: 'Soft warm white,800LM, E26, indoor, Hue app, Alexa, Google Assistant, Apple HomeKit.',
    link: 'https://amzn.to/3Xjn9Bn',
  },
  {
    imageSrc: '/smartLighting/smartlighting3.jpg',
    title: 'Govee Smart Bulb',
    description: 'Dimmable Bluetooth LED, 7W (60W), A19, multicolor, music sync, app control, no hub needed.',
    link: 'https://amzn.to/3X7RhOG',
  },
  {
    imageSrc: '/smartLighting/smartlighting4.jpg',
    title: 'Amazon Basics Smart Bulb',
    description: 'Smart LED bulb, Alexa-only, 7.5W (60W equivalent), 800 lumens, multicolor, A19, 2.4 GHz Wi-Fi.',
    link: 'https://amzn.to/4e4KTP5',
  },
   
  // Add more products here
];

const products1 = [
  {
    imageSrc: '/smartLighting/smartlighting5.jpg',
    title: 'Govee RGBIC Smart Strip',
    description: 'RGBIC LED strip lights, 16.4ft, Bluetooth app control, DIY multiple colors, music sync, home decor.',
    link: 'https://amzn.to/4gfjfRE',
  },
   
  {
    imageSrc: '/smartLighting/smartlighting6.jpg',
    title: 'ZOZOO  Smart Strip',
    description: 'RGBIC LED strip lights, 16.4ft, Bluetooth app control, DIY multiple colors, music sync, home decor.',
    link: 'https://amzn.to/3WXqq88',
  },
  {
    imageSrc: '/smartLighting/smartlighting7.jpg',
    title: 'Tenmiro Smart Strip',
    description: '100ft LED strip lights (2x50ft), smart RGB, remote & app control, music sync, color changing, for home parties.',
    link: 'https://amzn.to/4dZSXk9',
  },
  // Add more products here
];

 

 

const buyingGuideContent = `
  Choosing the right smart lighting involves considering factors such as compatibility with existing systems, control options, and energy efficiency.
`;

const blogPosts = [
  {
    title: 'Benefits of smart home lighting',
    summary: '5 Key Benefits That Smart Home Lighting Can Bring to Your Home.',
    link: 'https://www.tsp.space/smart-home-blog/the-5-key-benefits-that-smart-home-lighting-can-bring-to-your-home/',
  },
  {
    title: 'Everything you need to know about Smart Lighting',
    summary: 'Smart lighting is the future and it\'s already here. Read our smart guide to learn how to take full control of your lighting system.',
    link: 'https://blog.lightbulbs-direct.com/smart-lighting-guide/',
  },
  {
    title: 'Smart Lighting for A Better Home',
    summary: 'Smart home gadgets are lovable by every individual. Schneider Electric offers a vast range of smart bulbs, lighting systems, and more. Read now.',
    link: 'https://eshop.se.com/in/blog/post/smart-lighting-for-a-better-home.html?srsltid=AfmBOooCg3iwHn5X4aPSB1rdHpPxAvYoohjpluUI8vvoZHbDRSzzBrcy',
  },
  // Add more blog posts here
];


const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection  data={heroData} />

        <Section id="intro" title="Why Smart Lighting?">
        <BenefitsList benefits={benefits} />
      </Section>
      <ComparisonSection/>
 

         

        <Section id="products" title="Recommended Bulb Products">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

        <Section id="products" title="Recommended Strip Products">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products1.map((product, index) => (
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
