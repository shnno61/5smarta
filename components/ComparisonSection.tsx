// components/ComparisonSection.tsx
import Image from 'next/image';

const ComparisonSection = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        {/* Image Section */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* LED Strips Section */}
          <div className="flex-1 mb-8 md:mb-0 px-2 xs:px-4 sm:px-6 lg:px-8 py-2">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md border-4 border-blue-500">
              <Image
                src="/smartHome/smartLighting/strip.png" // Replace with your image path
                alt="LED Strips"
                fill
                style={{ objectFit: 'contain' }} 
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-6 ml-2 text-gray-900 ">LED Strips</h2>
            <p className="mt-2 text-gray-700 mb-6 ml-2">
              LED strips are flexible and customizable, ideal for accent and mood lighting. They can change colors and are great for decoration but require more complex installation.
            </p>
          </div>

          {/* LED Bulbs Section */}
          <div className="flex-1 px-2 xs:px-4 sm:px-6 lg:px-8 py-2">
            <div className="relative h-64 overflow-hidden rounded-lg shadow-md border-4 border-blue-500">
              <Image
                src="/smartHome/smartLighting/bulb.jpg" // Replace with your image path
                alt="LED Bulbs"
                fill
                style={{ objectFit: 'contain' }} // Ensures the image covers the container
                className="transition-transform duration-500 hover:scale-105"
                 
              />
            </div>
            <h2 className=" ml-2 text-2xl font-semibold mt-6 text-gray-900">LED Bulbs</h2>
            <p className="mt-2 ml-2 text-gray-700  mb-6">
              LED bulbs are easy to install and provide bright, general lighting. They are durable and energy-efficient, ideal for everyday use and task lighting.
            </p>
          </div>
        </div>
        <h2 className="text-3xl text-blue-600 font-bold mb-6 px-3 md:px-5 lg:px-6"> Some Tips </h2>
        {/* Comparison Table */}
        <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2 px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-md rounded-lg">
            <table className=" font-inter min-w-full divide-y divide-gray-200 text-xs xs:text-sm sm:text-base font-medium text-gray-900">
              <thead className="bg-blue-500 text-white">
                <tr>
                  <th className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Feature</th>
                  <th className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">LED Strips</th>
                  <th className="px-2 py-3 xs:px-4 sm:px-6">LED Bulbs</th>
                </tr>
              </thead>
              <tbody className="divide-y text-center divide-gray-200">
                <tr className="bg-gray-300">
                  <td className="px-2  py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Flexibility</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Flexible and customizable</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Fixed shape, standard fixtures</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Lighting Type</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Accent and mood lighting</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">General and task lighting</td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Brightness</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Lower, good for ambiance</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Wide range, bright for tasks</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Customization</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Color-changing, dimmable</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Color options, dimmable</td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Installation</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Complex, may need mounting</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Simple, just screw in</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Decorative Use</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Great for decoration</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Less used for decoration</td>
                </tr>
                <tr className="bg-gray-300">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Cost</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Varies, can add up</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Generally affordable</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-2 py-3 xs:px-4 sm:px-6 font-bold border-r border-gray-400">Durability</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6 border-r border-gray-400">Can wear out, depends on setup</td>
                  <td className="px-2 py-3 xs:px-4 sm:px-6">Long-lasting, robust</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

      </div>
    
    </section>
  );
};

export default ComparisonSection;
