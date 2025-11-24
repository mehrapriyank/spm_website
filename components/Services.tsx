import React from 'react';
import { SERVICES } from '../constants';
import { SectionTitle } from './SectionTitle';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <Reveal direction="up">
          <SectionTitle 
            title="Industrial Solutions" 
            subtitle="Our Capabilities" 
          />
        </Reveal>

        {/* Changed from grid to flex-wrap with justify-center to handle ANY number of items symmetrically */}
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            // Clamp animation delay so the last items don't take forever to load
            // Use modulo to create a wave effect row by row rather than strictly sequential
            const delay = Math.min((index % 3) * 100, 300); 
            
            return (
              <div key={service.id} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] flex">
                <Reveal direction="up" delay={delay} width="100%">
                  <div 
                    className="group bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden flex flex-col h-full"
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mb-8 text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading group-hover:text-brand-700 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                        {service.description}
                      </p>

                      <div className="border-t border-gray-100 pt-6">
                        <ul className="space-y-3 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-500 font-medium">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <a href="#contact" className="inline-flex items-center text-brand-600 font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                          Learn More <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};