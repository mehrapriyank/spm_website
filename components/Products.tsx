import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Check, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Product } from '../types';

export const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [startIndex, setStartIndex] = useState(0);

  // Configuration
  const itemsToShowDesktop = 3;
  const maxIndex = PRODUCTS.length - itemsToShowDesktop;

  const nextSlide = () => {
    setStartIndex(prev => (prev < maxIndex ? prev + 3 : 0));
  };

  const prevSlide = () => {
    setStartIndex(prev => (prev > 0 ? prev - 3 : maxIndex));
  };

  const visibleProducts = PRODUCTS.slice(startIndex, startIndex + itemsToShowDesktop);

  // Calculate progress for the bar
  const progress = ((startIndex + 1) / (maxIndex + 1)) * 100;

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden min-h-screen flex flex-col justify-center">
       {/* Background Element */}
       <div className="absolute top-0 right-0 w-2/3 h-full bg-gray-50/50 skew-x-12 transform translate-x-1/3 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <Reveal direction="up">
          <SectionTitle 
            title="Our Machines" 
            subtitle="Engineering Excellence" 
          />
        </Reveal>

        <div className="relative">
          {/* Navigation Arrows (Desktop: Side, Mobile: Bottom) */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-white border border-gray-200 text-brand-600 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={24} />
          </button>

          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-white border border-gray-200 text-brand-600 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-600 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="Next Slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {visibleProducts.map((product, index) => (
               <div 
                  key={`${product.id}-${startIndex}`} 
                  className="w-full"
               >
                 <Reveal direction="up" delay={index * 100} width="100%">
                   <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-[450px]">
                      {/* Image Section */}
                      <div className="h-56 relative overflow-hidden">
                         <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-brand-900/20 group-hover:bg-transparent transition-colors duration-300"></div>
                         
                         {/* Floating Badge */}
                         <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-800 uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                            View Details
                         </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8 flex flex-col flex-grow relative">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-400 to-brand-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                         
                         <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                            {product.title}
                         </h3>
                         
                         <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                            {product.description}
                         </p>

                         {/* <button 
                            onClick={() => setSelectedProduct(product)}
                            className="inline-flex items-center text-sm font-bold text-brand-600 uppercase tracking-wider group/btn"
                         >
                            <span className="border-b-2 border-brand-100 group-hover/btn:border-brand-600 transition-colors">Know More</span>
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                         </button> */}
                      </div>
                   </div>
                 </Reveal>
               </div>
             ))}
          </div>

          {/* Progress Bar Indicator */}
          <div className="mt-12 max-w-xs mx-auto h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-brand-600 transition-all duration-500 ease-out progress-fill"
              style={{ ['--progress' as any]: `${progress}%` }}
            />
          </div>
          
          {/* View All Link */}
          <div className="text-center mt-8">
            <a href="#products" className="text-sm font-semibold text-gray-400 hover:text-brand-600 transition-colors">
              Showing {startIndex + 1}-{Math.min(startIndex + itemsToShowDesktop, PRODUCTS.length)} of {PRODUCTS.length} Machines
            </a>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fade-in" onClick={() => setSelectedProduct(null)} />
           <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up flex flex-col md:flex-row overflow-hidden">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors z-30"
              >
                 <X size={24} />
              </button>

              {/* Modal Image */}
              <div className="w-full md:w-2/5 relative min-h-[250px]">
                 <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
              </div>

              {/* Modal Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col">
                 <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">{selectedProduct.title}</h2>
                 <div className="h-1 w-20 bg-brand-500 rounded-full mb-6"></div>
                 
                 <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                   {selectedProduct.description}
                 </p>
                 
                 <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 mb-8">
                   <h4 className="font-bold text-gray-900 uppercase tracking-widest text-xs mb-4 flex items-center">
                     <Check className="w-4 h-4 mr-2 text-brand-500" /> Key Specifications
                   </h4>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedProduct.features.map((feature, idx) => (
                         <div key={idx} className="flex items-center text-sm text-gray-700">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2"></div>
                            {feature}
                         </div>
                      ))}
                   </div>
                 </div>

                 <div className="mt-auto flex justify-end gap-4">
                    <Button variant="secondary" onClick={() => setSelectedProduct(null)}>Close</Button>
                    <a href="#contact">
                      <Button>Enquire Now</Button>
                    </a>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};