import React from 'react';

interface BenefitsListProps {
  benefits: string[];
}

const BenefitsList: React.FC<BenefitsListProps> = ({ benefits }) => {
  return (
    <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl mb-6">
      {benefits.map((benefit, index) => (
        <li key={index} className="mb-2">
          {benefit}
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
