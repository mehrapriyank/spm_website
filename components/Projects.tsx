import React from 'react';
import { PROJECTS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { ArrowRight } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-gray-900 text-white relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent_50%)]" />
       
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-left">
            <span className="block text-sm font-bold tracking-widest uppercase mb-2 text-brand-400">
              Our Portfolio
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              Featured Projects
            </h2>
            <div className="mt-4 h-1 w-20 bg-brand-500 rounded-full" />
          </div>
          <a href="#" className="hidden md:flex items-center text-brand-400 hover:text-white transition-colors font-medium mt-4 md:mt-0">
             View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer shadow-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Stronger gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="inline-block px-2 py-1 bg-brand-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-sm mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-heading font-bold text-white mb-4 leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center text-brand-400 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                  View Details <ArrowRight className="ml-2 w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
           <Button variant="outline" className="w-full border-gray-700 text-gray-300">View All Projects</Button>
        </div>
      </div>
    </section>
  );
};

// Import Button just for the mobile fallback
import { Button } from './Button';