 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 
const heroData = {
  backgroundImage: '/images/hero_security.jpg',
  title: 'Secure Your Life with Advanced Smart Technology',
  subtitle: 'Explore top-rated smart security solutions to keep your life safe and secure around the clock.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  '24/7 monitoring and alerts',
  'Real-time video surveillance',
  'Remote access and control',
  'Integration with smart home systems',
  'Advanced motion detection',
  'Automated security settings',
  'Emergency response features',
  'Enhanced privacy protection',
];

const products = [
  {
    imageSrc: '/smartSecurity/cam1.jpg',
    title: 'Blink Mini Smart Camera',
    description: 'Compact 1080p indoor security camera with night vision, motion detection, and Alexa compatibility.',
    link: 'https://amzn.to/3ASJMnj',
  },
  {
    imageSrc: '/smartSecurity/cam2.jpg',
    title: 'Kasa Indoor Smart Camera',
    description: 'Pan/tilt 1080p security camera with night vision, motion detection, and Alexa/Google Home compatibility.',
    link: 'https://amzn.to/4dZ6Ejo',
  },
  {
    imageSrc: '/smartSecurity/cam3.jpg',
    title: 'WYZE Cam Pan v3 Indoor/Outdoor',
    description: 'Comprehensive alarm system with real-time alerts and integration with home automation.',
    link: 'https://amzn.to/4g5iDxB',
  },
  {
    imageSrc: '/smartSecurity/lock1.jpg',
    title: 'Smart Door Lock',
    description: 'WiFi video smart door lock with fingerprint, camera, keypad, and keyless entry.',
    link: 'https://amzn.to/3yMz41m',
  },
  {
    imageSrc: '/smartSecurity/lock2.jpg',
    title: 'eufy Smart Lock',
    description: 'eufy S330: 3-in-1 camera, doorbell, fingerprint lock with app control.',
    link: 'https://amzn.to/4dUFI4A',
  },
  {
    imageSrc: '/smartSecurity/vd1.jpg',
    title: 'Blink Video Doorbell',
    description: 'HD video, two-way audio, motion alerts, and Alexa enabled. Wired or wire-free.',
    link: 'https://amzn.to/4e4O3T2',
  },
  {
    imageSrc: '/smartSecurity/vd2.jpg',
    title: 'Ring Video Doorbell',
    description: '1080p HD video, improved motion detection, easy installation. Venetian Bronze.',
    link: 'https://amzn.to/4g3RBqA',
  },
  {
    imageSrc: '/smartSecurity/vd3.jpg',
    title: 'Smart Doorbell Camera ',
    description: 'Wireless doorbell camera : AI detection, two-way audio, HD video, night vision, chime, 2.4G WiFi, cloud storage.',
    link: 'https://amzn.to/3Mrn0Wn',
  },
  
];
 
const buyingGuideContent = `
  To select the right smart security products, evaluate factors such as camera resolution, motion detection capabilities, and integration with other smart devices.
`;
const blogPosts = [
  {
    title: 'Securing your World: The Power of Smart Security Cameras',
    summary: 'Smart security cameras offer high-quality video and advanced monitoring features, such as pan, tilt, and zoom. Users can remotely control the camera.',
    link: 'https://www.intuz.com/blog/smart-security-cameras',
  },
  {
    title: 'How To Secure Your Home Security Cameras',
    summary: 'Look for a camera that encrypts, or scrambles, your account information, livestreams, and archived videos so hackers can\'t see them.',
    link: 'https://consumer.ftc.gov/articles/how-secure-your-home-security-cameras',
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
 
      <h2 className="text-3xl text-blue-600 font-bold mb-6 px-3 md:px-5 lg:px-6">We understand that choosing the right product can be overwhelming. Let 5Smarta help you find the perfect fit for smart living.</h2>

        <Section id="products" title="Recommended Security Products">
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


        <Section id="blog" title="Blogs">
          <BlogSection posts={blogPosts} />
        </Section>
      </main>

     
    </>
  );
};

export default Page;
