 
import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';
import ProductCard from '@/components/ProductCard';
import QuoteCard from '@/components/QuoteCard';
import BlogSection from '@/components/BlogSection';
import BenefitsList from '@/components/BenefitsList';
 

const heroData = {
  backgroundImage: '/images/hero_productivity.jpg',
  title: 'Boost Office Efficiency with Smart Productivity Devices',
  subtitle: 'Enhance your workflow with advanced smart printers, desks, and voice assistants designed for a more streamlined work environment.',
  buttonText: 'Explore Products',
  buttonLink: '#products',
};

const benefits = [
  'Increased efficiency with automated tasks',
  'Seamless integration with existing office systems',
  'Enhanced workflow with smart desks and adjustable settings',
  'High-quality and cost-effective printing solutions',
  'Voice-activated assistants for hands-free control',
  'Improved collaboration with smart meeting room systems',
  'Real-time monitoring and performance tracking',
  'Customizable features to suit specific office needs',
];

const products = [
  {
    imageSrc: '/smartOffice/smartProductivity/smart_printer.jpg',
    title: 'Smart Multifunction Printer',
    description: 'A versatile printer with features including wireless connectivity, automatic document feeder, and mobile printing capabilities for efficient office management.',
    link: 'https://example.com/product1',
  },
  {
    imageSrc: '/smartOffice/smartProductivity/smart_desk.jpg',
    title: 'Adjustable Smart Desk',
    description: 'An ergonomic desk with programmable height adjustments, integrated charging ports, and smart controls to optimize your workspace and improve posture.',
    link: 'https://example.com/product2',
  },
  {
    imageSrc: '/smartOffice/smartProductivity/voice_assistant.jpg',
    title: 'Smart Voice Assistant',
    description: 'A voice-controlled assistant that integrates with office systems to manage tasks, set reminders, and control smart devices with voice commands.',
    link: 'https://example.com/product3',
  },
  {
    imageSrc: '/smartOffice/smartProductivity/smart_meeting_system.jpg',
    title: 'Smart Meeting Room System',
    description: 'An advanced system for managing meeting schedules, video conferencing, and room resources, designed to enhance collaboration and productivity.',
    link: 'https://example.com/product4',
  },
  // Add more products here
];

const expertQuotes = [
  {
    quote: 'Smart productivity devices are game-changers in modern offices. With advanced features like voice control and automated adjustments, they streamline daily operations and boost overall efficiency.',
    author: 'Alex Thompson, Tech Productivity Expert',
  },
  {
    quote: 'Integrating smart devices such as multifunction printers and adjustable desks into your office can significantly enhance workflow and create a more dynamic work environment.',
    author: 'Jordan Lee, Office Efficiency Specialist',
  },
  // Add more expert quotes here
];

const userTestimonials = [
  {
    quote: 'The smart desk has transformed my workday. The ability to adjust the height and integrate charging ports has made my workspace much more functional.',
    author: 'Sarah Williams, Marketing Coordinator',
  },
  {
    quote: 'Our office printer’s smart features have saved us time and money. Wireless printing and automatic document feeding have streamlined our processes significantly.',
    author: 'Michael Brown, IT Manager',
  },
  // Add more testimonials here
];

const buyingGuideContent = `
  Choosing the right smart productivity devices involves evaluating features such as automation capabilities, integration with existing office systems, and overall ease of use. Our guide provides insights into selecting the best devices to enhance your office’s efficiency and functionality.
`;

const blogPosts  = [
  {
    title: 'Top Smart Devices for Office Efficiency',
    summary: 'Explore the latest smart devices designed to boost efficiency in the workplace, including printers, desks, and voice assistants.',
    link: '/blog/smart-office-devices',
  },
  {
    title: 'How Smart Printers and Desks Enhance Workflow',
    summary: 'Learn how smart printers and adjustable desks can streamline your office workflow and improve productivity.',
    link: '/blog/smart-printers-desks',
  },
  // Add more blog posts here
];


const Page = () => {
  return (
    <>
    

      <main className="relative overflow-hidden bg-white text-gray-800">
        <HeroSection data={heroData} />

        <Section id="intro" title="Why Smart Productivity?">
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
