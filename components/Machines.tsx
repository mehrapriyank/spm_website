import React, { useState } from 'react';
import { PRODUCTS, MACHINE_HIERARCHY } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Check, ArrowRight, X, ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react';
import { Reveal } from './Reveal';
import { Button } from './Button';
import { Product } from '../types';

// Recursive Tree Component for Hierarchy
const HierarchyNode = ({ node, level = 0 }: { node: any, level?: number }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="select-none">
      <div 
        className={`hierarchy-node flex items-center py-2 px-3 rounded-md transition-colors cursor-pointer ${level === 0 ? 'bg-brand-900 text-white font-bold mb-2' : 'hover:bg-brand-50 text-gray-700'}`}
        style={{ ['--ml' as any]: `${level * 16}px` }}
        onClick={() => hasChildren && setIsOpen(!isOpen)}
      >
        {hasChildren && level > 0 && (
          <span className="mr-2 text-brand-500">
             {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </span>
        )}
        <span className={`${level === 0 ? 'text-lg' : 'text-sm font-medium'}`}>{node.label}</span>
      </div>
      {hasChildren && isOpen && (
        <div className="border-l border-gray-200 ml-4 pl-1 my-1">
          {node.children.map((child: any, idx: number) => (
            <HierarchyNode key={idx} node={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const Machines: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  
  const ITEMS_PER_PAGE = 4;
  const totalPages = Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE);
  const currentProducts = PRODUCTS.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  return (
    <section id="machines-page" className="py-24 bg-white relative overflow-hidden min-h-screen">
       <div className="absolute top-0 left-0 w-full h-96 bg-brand-50 skew-y-3 transform -translate-y-48 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 pt-12">
        <Reveal direction="up">
          <SectionTitle 
            title="Machine Catalogue" 
            subtitle="Engineering Excellence" 
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Machine Cards Grid (2x2) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[600px]">
               {currentProducts.map((product, index) => (
                 <Reveal key={product.id} direction="up" delay={index * 100} width="100%">
                   <div className="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                      <div className="w-full h-48 relative overflow-hidden">
                         <img 
                            src={product.image} 
                            alt={product.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                         <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors"></div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow justify-between">
                         <div>
                            <h3 className="text-xl font-heading font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{product.title}</h3>
                            <p className="text-gray-600 text-sm line-clamp-3 mb-4">{product.description}</p>
                         </div>
                         <button 
                            onClick={() => setSelectedProduct(product)}
                            className="inline-flex items-center text-sm font-bold text-brand-600 uppercase tracking-wider hover:text-brand-800 transition-colors mt-auto"
                         >
                            Know More <ArrowRight className="ml-2 w-4 h-4" />
                         </button>
                      </div>
                   </div>
                 </Reveal>
               ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-8">
               <button 
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`flex items-center px-4 py-2 rounded-lg font-bold transition-all ${currentPage === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-brand-600 hover:bg-brand-50'}`}
               >
                 <ChevronLeft className="mr-2" /> Previous
               </button>
               
               <div className="flex space-x-2">
                 {[...Array(totalPages)].map((_, idx) => (
                   <button 
                     key={idx}
                     onClick={() => setCurrentPage(idx)}
                     className={`w-3 h-3 rounded-full transition-all ${currentPage === idx ? 'bg-brand-600 w-6' : 'bg-gray-300 hover:bg-brand-400'}`}
                   />
                 ))}
               </div>

               <button 
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`flex items-center px-4 py-2 rounded-lg font-bold transition-all ${currentPage === totalPages - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-brand-600 hover:bg-brand-50'}`}
               >
                 Next <ChevronRight className="ml-2" />
               </button>
            </div>
          </div>

          {/* Right Column: Hierarchy Tree */}
          <div className="lg:col-span-1">
             <Reveal direction="left" delay={300}>
                <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sticky top-24">
                   <h3 className="text-xl font-heading font-bold text-gray-900 mb-6 border-b border-gray-100 pb-4">Machine Classification</h3>
                   <div className="space-y-2 max-h-[80vh] overflow-y-auto pr-2 custom-scrollbar">
                      {MACHINE_HIERARCHY.map((node, idx) => (
                         <HierarchyNode key={idx} node={node} />
                      ))}
                   </div>
                </div>
             </Reveal>
          </div>

        </div>
      </div>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
           <div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onClick={() => setSelectedProduct(null)} />
           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up">
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 transition-colors z-20"
              >
                 <X size={20} />
              </button>

              <div className="h-64 w-full relative">
                 <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <h2 className="text-3xl font-heading font-bold text-white">{selectedProduct.title}</h2>
                 </div>
              </div>

              <div className="p-8">
                 <p className="text-gray-700 text-lg leading-relaxed mb-8">{selectedProduct.description}</p>
                 
                 <h4 className="font-bold text-gray-900 uppercase tracking-widest text-sm mb-4">Key Features</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProduct.features.map((feature, idx) => (
                       <div key={idx} className="flex items-center p-3 bg-brand-50 rounded-lg border border-brand-100">
                          <Check className="w-5 h-5 text-brand-600 mr-3" />
                          <span className="text-brand-900 font-medium">{feature}</span>
                       </div>
                    ))}
                 </div>

                 <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
                    <Button onClick={() => setSelectedProduct(null)}>Close Details</Button>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};