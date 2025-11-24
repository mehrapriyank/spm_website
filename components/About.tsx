import React from 'react';
import { Button } from './Button';
import { CheckCircle2, Award, Settings } from 'lucide-react';
import { TEAM_IMAGE_PLACEHOLDER } from '../constants';
import { Reveal } from './Reveal';

export const About: React.FC<{ onNavigate: (viewId: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-16">
          
          {/* Text Content */}
          <div className="max-w-4xl mx-auto text-center">
            <Reveal direction="up">
              <div className="inline-flex items-center px-3 py-1 mb-6 border border-gray-200 rounded-full bg-gray-50">
                 <Settings className="w-4 h-4 text-brand-500 mr-2 animate-spin-slow" />
                 <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">Company Profile</span>
              </div>
            </Reveal>
            
            <Reveal direction="up" delay={100}>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Paper Industry Leaders Since <span className="text-brand-600 relative inline-block">
                  2004
                  <svg className="absolute w-full h-2 -bottom-1 left-0 text-brand-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                     <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>
            </Reveal>
            
            <Reveal direction="up" delay={200}>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                Started in 2004 as an expert erection and installation firm, Saloni Engineers evolved into a full-scale manufacturer, <span className="font-bold text-gray-800">Saloni Paper Machine Pvt. Ltd.</span>, in 2010. Based in Vapi, Gujarat, we combine field expertise with precision manufacturing to deliver turnkey solutions for the paper industry.
              </p>
            </Reveal>

            <Reveal direction="up" delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-10">
                {[
                  "Manufacturing Plant in Vapi G.I.D.C.",
                  "Specialized in Modernization & Rejuvenation",
                  "Complete Turnkey Project Capabilities",
                  "Expert Teams for Erection & Commissioning"
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="mt-1 mr-4 flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-500 transition-colors duration-300">
                         <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 group-hover:text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="up" delay={400}>
              <div className="flex gap-4 justify-center">
                 <Button variant="primary" onClick={() => onNavigate('about')}>Our Story</Button>
                 <Button variant="outline" onClick={() => onNavigate('brochure')}>Download Brochure</Button>
              </div>
            </Reveal>
          </div>

          {/* Large Team Photo Placeholder */}
          {/* <Reveal direction="up" delay={500}>
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl group" style={{ width: '70%', margin: '0 auto' }}>
               <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
               <img 
                src={TEAM_IMAGE_PLACEHOLDER} 
                alt="Saloni Paper Machine Team & Facility" 
                className="w-full h-auto min-h-[400px] object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute bottom-0 right-0 bg-white p-6 rounded-tl-xl shadow-lg border-t border-l border-gray-100 hidden md:block">
                 <div className="flex items-center">
                    <Award className="text-brand-500 mr-3" size={24} />
                    <div>
                      <span className="block font-bold text-gray-900">Vapi, Gujarat</span>
                      <span className="text-sm text-gray-600">Manufacturing Unit & HQ</span>
                    </div>
                 </div>
              </div>
            </div>
          </Reveal> */}

        </div>
      </div>
    </section>
  );
};
