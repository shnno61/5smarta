 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero.jpg',
  title: 'Illuminate Your Home with Cutting-Edge Smart Lighting',
  subtitle: 'Discover top-rated smart lighting solutions that offer convenience and energy efficiency.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Energy efficiency',
  'Convenience and automation',
  'Enhanced home security',
  'Customization and ambiance',
  'Integration with other smart devices',
  'Improved well-being',
  'Cost savings over time',
  'Future-proofing your home',
];

const products = [
  {
    imageSrc: '/smartHome/smartLighting/smartlighting1.jpg',
    title: '100ft Led Strip Lights ',
    description: '(2 Rolls of 50ft) RGB Music Sync Color Changing,Bluetooth Led Lights with Smart App Control Remote,Led Lights for Bedroom Room Lighting Flexible Home Decor',
    link: 'https://amzn.to/3As79UH',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartlighting2.jpg',
    title: 'Govee Smart Light Bulbs',
    description: 'Color Changing Light Bulb, Work with Alexa and Google Assistant, 16 Million Colors RGBWW, WiFi & Bluetooth LED Light Bulbs, Music Sync, A19, 800 Lumens, 4 Pack.',
    link: 'https://amzn.to/4dIA6tL',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartlighting3.jpg',
    title: 'LED Night Light Lamp',
    description: 'with Smart Sensor Dusk to Dawn Sensor, Daylight White, 0.5W Plug-in, 6-Pack.',
    link: 'https://amzn.to/46T2kA6',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartlighting4.jpg',
    title: 'Keepsmile 100ft Led Strip Lights',
    description: '(2 Rolls of 50ft) Bluetooth Smart App Control Music Sync Color Changing RGB Led Light Strip with Remote,Led Lights for Bedroom Room Home Decor Party Festival.',
    link: 'https://amzn.to/3YTPsHE',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartlighting5.jpg',
    title: 'Govee Smart LED Strip Lights',
    description: '16.4ft WiFi LED Strip Lighting Work with Alexa and Google Assistant, 16 Million Colors with App Control and Music Sync LED Lights for Bedroom, Kitchen, TV, Party.',
    link: 'https://amzn.to/4drrxE1',
  },
  {
    imageSrc: '/smartHome/smartLighting/smartlighting6.jpg',
    title: 'Kasa Smart Light Bulbs', 
    description: ' Full Color Changing Dimmable Smart WiFi Bulbs Compatible with Alexa and Google Home, A19, 60 W 800 Lumens,2.4Ghz only, No Hub Required, 2-Pack (KL125P2), Multicolor',
    link: 'https://amzn.to/3yJAvNU',
  },
  // Add more products here
];

const expertQuotes = [
  {
    quote: 'Smart lighting is one of the most accessible and transformative elements of a smart home. With products like Philips Hue and LIFX, users can easily customize their lighting to fit their mood, improve their home\'s security, and save on energy costs. These systems integrate seamlessly with other smart home devices, making them a central piece of home automation.',
    author: 'Stacey Higginbotham, Host of the "Internet of Things" Podcast',
  },
  {
    quote: 'The advancements in smart lighting technology have made it possible to create the perfect ambiance for any occasion with just a few taps on your phone or a voice command. Philips Hue remains the gold standard, offering a wide range of products that work reliably and integrate well with other smart home ecosystems like Amazon Alexa, Google Assistant, and Apple HomeKit.',
    author: 'Chris Monroe, Senior Editor at CNET\'s Smart Home Section',
  },
  {
    quote: 'Smart lighting is revolutionizing the way we interact with our homes. It\'s not just about turning lights on and off anymore. You can program lights to match your mood, automate them to save energy, and even use them as a security feature. It\'s a blend of convenience, efficiency, and innovation that brings new life to home lighting.',
    author: 'David Pogue, Tech Columnist and TV Host',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The smart lighting system has transformed my home. It’s incredibly easy to use and the energy savings are significant!',
    author: 'Jane Smith',
  },
  {
    quote: 'The smart lighting system has transformed my home. It’s incredibly easy to use and the energy savings are significant!',
    author: 'Jane Smith',
  },
  {
    quote: 'The smart lighting system has transformed my home. It’s incredibly easy to use and the energy savings are significant!',
    author: 'Jane Smith',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  Choosing the right smart lighting involves considering factors such as compatibility with existing systems, control options, and energy efficiency. 
  Our buying guide helps you make an informed decision.
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
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Lighting?">
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
