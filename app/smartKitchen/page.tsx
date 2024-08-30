 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
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
  'Remote control and monitoring',
  'Energy efficiency',
  'Convenient grocery ordering',
  'Integration with voice assistants',
  'Improved food safety',
  'Customizable cooking settings',
];

const products = [
  {
    imageSrc: '/smartKitchen/oven1.jpg',
    title: 'TOSHIBA Microwave',
    description: '1.6 cu.ft. countertop microwave with inverter technology, smart sensor, auto defrost, 13.6" turntable, 1250W, and black stainless steel finish.',
    link: 'https://amzn.to/3WYCeHe',
  },
  {
    imageSrc: '/smartKitchen/pot1.jpg',
    title: 'Instant Pot Pro',
    description: '10-in-1 6-quart cooker with pressure, slow, rice, steam, sauté, sous vide, yogurt, sterilizer, and warmer functions. Includes app with 800+ recipes. Black.',
    link: 'https://amzn.to/3X0pzn8',
  },
  {
    imageSrc: '/smartKitchen/cm1.jpg',
    title: 'Hamilton Beach',
    description: '2-Way Coffee Maker: 12-cup programmable drip coffee maker with single-serve option, glass carafe, auto-pause, and pour. Black. Model 49980R.',
    link: 'https://amzn.to/4cLTIfC',
  },
  {
    imageSrc: '/smartKitchen/cm2.jpg',
    title: 'Hamilton Beach FlexBrew Trio',
    description: '2-way coffee maker for K-Cup pods or grounds, with single-serve and 12-cup pot options. Fast brewing. Black. Model 49902.',
    link: 'https://amzn.to/4e60huz',
  },
  {
    imageSrc: '/smartKitchen/cm3.jpg',
    title: 'Cuisinart Coffee Maker',
    description: '14-cup glass carafe, fully automatic with brew strength control and 1-4 cup setting. Stainless steel. Model DCC-3200P1.',
    link: 'https://amzn.to/3Z613DD',
  },
  {
    imageSrc: '/smartKitchen/cm4.jpg',
    title: 'Ninja Coffee Brewer',
    description: '12-Cup Coffee Brewer: Programmable with 2 brew styles, adjustable warm plate, 60oz reservoir, and delay brew. Black/Stainless Steel.',
    link: 'https://amzn.to/4d2hrst',
  },
];

 

const buyingGuideContent = `
  When choosing smart kitchen appliances, consider features like safety, remote control capabilities, and energy efficiency.
`;
const blogPosts = [
  {
    title: 'What is a Smart Microwave?',
    summary: 'Sensor-Based Cooking: Smart microwaves employ sensors to detect moisture, temperature, and doneness levels, adjusting cooking times accordingly.',
    link: 'https://www.mountainhighappliance.com/blog/what-is-a-smart-microwave/',
  },
  {
    title: 'Why your office coffee machine needs to be smart',
    summary: 'Smart coffee machines can be integrated into your building\'s systems and can provide valuable data for your team to improve operational time management.',
    link: 'https://www.scanomat.com/articles/why-your-office-coffee-machine-needs-to-be-smart/',
  },
  
  // Add more blog posts here
];



const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Kitchen?">
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
