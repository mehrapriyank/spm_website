import React from 'react';
import { HERO_IMAGE } from '../constants';
import { Button } from './Button';
import { ArrowRight, Zap, Eye, Users } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Image with Modern Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGE} 
          alt="Paper Mill Factory Interior" 
          className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite] hero-bg-img"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-950/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center flex-grow pt-32 pb-12">
        {/* Main Text Content */}
        <div className="max-w-4xl mb-12">
          <div className="inline-block mb-4 px-3 py-1 border border-brand-400/30 bg-brand-900/30 backdrop-blur-sm rounded-full animate-fade-in-up">
            <span className="text-brand-200 font-medium tracking-widest text-xs uppercase">Welcome to</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white leading-[0.95] mb-6 tracking-tight animate-fade-in-up animation-delay-100">
            Saloni 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200"> Paper Machines</span>
          </h1>
          
          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl font-light animate-fade-in-up animation-delay-200">
            Saloni Paper Machines Pvt. Ltd. is one the leading manufacturers of paper machine delivering end-to-end solutions to the customers. This will be your one-stop destination to realize your dreams and turn them to reality by partnering with us, as, <span className="text-white font-semibold italic">Teamwork makes Dreams work.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <a href="#products">
              <Button variant="primary" className="px-8" withIcon>
                Explore Machines
              </Button>
            </a>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white border border-white/30 hover:bg-white/10 rounded-sm transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>

      {/* Compact Bottom Info Bar */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            
            {/* Expertise */}
            <div className="py-6 md:px-6 first:pl-0 flex items-start gap-4 group hover:bg-white/5 transition-colors">
              <div className="mt-1 p-2 rounded-md bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Zap size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-heading text-lg mb-1">Expertise</h3>
                <p className="text-brand-100/80 text-xs leading-relaxed">
                  Capabilities in project engineering, manufacturing, and execution.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="py-6 md:px-6 flex items-start gap-4 group hover:bg-white/5 transition-colors">
              <div className="mt-1 p-2 rounded-md bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Eye size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-heading text-lg mb-1">Vision</h3>
                <p className="text-brand-100/80 text-xs leading-relaxed">
                  High quality services in design and modernization globally.
                </p>
              </div>
            </div>

            {/* Team */}
            <div className="py-6 md:px-6 flex items-start gap-4 group hover:bg-white/5 transition-colors">
              <div className="mt-1 p-2 rounded-md bg-brand-500/20 text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors">
                <Users size={20} />
              </div>
              <div>
                <h3 className="text-white font-bold font-heading text-lg mb-1">Our Team</h3>
                <p className="text-brand-100/80 text-xs leading-relaxed mb-1">
                  Dedicated, dynamic engineers and professionals.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};