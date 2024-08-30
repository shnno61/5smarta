 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
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
  'Convenient control via smartphone',
];

const products = [
  {
    imageSrc: '/smartCleaning/r1.jpg',
    title: 'iRobot Roomba Vac Robot Vacuum',
    description: 'Powerful, multi-surface vacuum with smart navigation, self-charging, and Alexa support. Model 675.',
    link: 'https://amzn.to/475HNIC',
  },
  {
    imageSrc: '/smartCleaning/r2.jpg',
    title: 'iRobot Roomba Combo i5',
    description: 'Self-emptying vacuum and mop with smart mapping, auto-emptying for 60 days, and Alexa support.',
    link: 'https://amzn.to/3WYBvWw',
  },
  {
    imageSrc: '/smartCleaning/r3.jpg',
    title: 'Lefant Robot Vacuum Cleaner',
    description: 'Lefant M210: Slim robot vacuum with strong suction, 120 mins runtime, self-charging, and Alexa control.',
    link: 'https://amzn.to/4cLpE3R',
  },
  // Add more products here
];

 

 
const buyingGuideContent = `
  Choosing the right smart cleaning devices involves evaluating features such as cleaning performance, battery life, ease of use, and integration with smart home systems.
`;

const blogPosts = [
  {
    title: 'The Rise of Robotic Vacuum Cleaners',
    summary: 'Robotic vacuums offer hands-free cleaning, allowing users to multitask or relax while the robot does the work. This trend towards automation is ...',
    link: 'https://www.linkedin.com/pulse/rise-robotic-vacuum-cleaners-trends-insights-future-projections-pax1f',
  },
  {
    title: 'The workings of robotic vacuum cleaners',
    summary: 'Today\'s robotic vacuum cleaners are smarter and more affordable. Most models map home layouts allowing faster cleaning, and they can automatically dump the dust ...',
    link: 'https://www.reliancedigital.in/solutionbox/the-workings-of-robotic-vacuum-cleaners/?srsltid=AfmBOopJngvE_ALf1nl_0Ub0-wTvMKUSShPE7vJhiHKYLNKhSk1hmMB-',
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
