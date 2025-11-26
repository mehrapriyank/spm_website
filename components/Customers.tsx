import React from 'react';
import { CUSTOMERS } from '../constants';
import { Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';

interface CustomersProps {
  mode?: 'carousel' | 'grid';
}

export const Customers: React.FC<CustomersProps> = ({ mode = 'carousel' }) => {
  // Duplicate the list to ensure smooth infinite scrolling for carousel
  const duplicatedCustomers = [...CUSTOMERS, ...CUSTOMERS];

  if (mode === 'grid') {
    return (
      <section id="customers-list" className="py-24 bg-white min-h-screen">
        <div className="container mx-auto px-6 pt-20">
          <Reveal direction="up">
            <SectionTitle title="Our Customers" subtitle="Trusted Partners" />
          </Reveal>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
            {CUSTOMERS.map((customer) => (
              <li key={customer.id} className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                <span className="font-heading text-lg font-semibold text-gray-900 text-center mb-1">{customer.name}</span>
                <span className="text-sm text-gray-500 text-center">{customer.place}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
  return (
    <section id="customers" className="py-20 bg-white border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <Reveal direction="up">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-400 uppercase tracking-widest">
            Trusted By Industry Leaders
          </h2>
        </Reveal>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {duplicatedCustomers.filter(customer => customer.logo).map((customer, index) => (
            <div 
              key={`${customer.id}-${index}`} 
              className="mx-8 w-48 h-24 flex items-center justify-center transition-all duration-300"
            >
              <img 
                src={customer.logo} 
                alt={customer.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Gradient masks to soften edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};