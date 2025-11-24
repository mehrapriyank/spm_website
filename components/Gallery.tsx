import React from 'react';
import { GALLERY_ITEMS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 pt-20">
        <Reveal direction="up">
          <SectionTitle 
            title="Our Gallery" 
            subtitle="Visual Tour" 
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 100} width="100%">
              <div className="group relative overflow-hidden rounded-xl aspect-square shadow-md cursor-pointer">
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-center">
                    <span className="inline-block px-3 py-1 bg-brand-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-white font-heading font-bold text-xl">{item.alt}</h3>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};