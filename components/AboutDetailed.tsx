import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { User, Target, Users, Zap, Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { APP_NAME } from '../constants';

export const AboutDetailed: React.FC = () => {
  const journey = [
    { year: '2004', title: 'Inception', desc: 'Founded under the leadership of Mr. Jaikishan Sharma as "Saloni Engineers," specializing in installation & erection.', icon: Calendar },
    { year: '2010', title: 'Manufacturing Leap', desc: 'After becoming successful erectors, we expanded into the manufacturing sector of the pulp and paper industry.', icon: FactoryIcon },
    { year: 'Growth', title: 'Industry Leaders', desc: 'With determined leadership, we emerged as "Saloni Paper Machines Pvt. Ltd.," one of the best manufacturers in India.', icon: Award },
    { year: 'Future', title: 'Innovation', desc: 'We continue to provide engineered solutions for energy cost-effective processes.', icon: Zap }
  ];

  return (
    <section className="bg-white min-h-screen pt-24 pb-24">
      
      {/* Intro Section */}
      <div className="container mx-auto px-6 mb-24">
        <Reveal direction="up">
          <SectionTitle title="About Us" subtitle="Our Story" />
        </Reveal>
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/2">
             <Reveal direction="up" delay={100}>
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                Leading Paper Machine Manufacturers Since 2010
              </h3>
              <div className="text-gray-600 space-y-6 leading-relaxed text-lg">
                <p>
                  <span className="font-bold text-brand-600">{APP_NAME}</span> is one of the leading Paper Machine manufacturing companies serving our customers since 2010. We provide tailor-made solutions to suit your wishlist and work as partners from start to end.
                </p>
                <p>
                  It is our responsibility to carry out the complete project with high precision & efficiency and least customer difficulties.
                </p>
                <div className="bg-brand-50 p-6 rounded-xl border border-brand-100">
                  <h4 className="font-bold text-brand-800 mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" /> Our Services
                  </h4>
                  <p className="text-sm text-brand-900/70">
                    Erection, Commission, Installation, Operational Improvement, Expansion, Upgradation, Modernization, Energy Conservation, Re-built, Dismantling & Modifications.
                  </p>
                </div>
              </div>
             </Reveal>
          </div>
          <div className="lg:w-1/2">
             <Reveal direction="left" delay={200}>
               <div className="relative">
                  <div className="absolute inset-0 bg-brand-600 transform rotate-3 rounded-2xl opacity-10"></div>
                  <img 
                    src="images/team.jpg" 
                    alt="Factory Overview" 
                    className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
               </div>
             </Reveal>
          </div>
        </div>
      </div>

      {/* MD Profile Section */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800/50 skew-x-12 transform translate-x-32" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/3 flex justify-center">
                 <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 border-2 border-brand-500 rounded-full animate-pulse"></div>
                    <img 
                      src="images/jks.jpg" 
                      alt="Mr. Jai Kishan Sharma" 
                      className="w-full h-full object-cover rounded-full border-4 border-gray-800 shadow-2xl"
                    />
                    <div className="absolute bottom-4 right-4 bg-brand-600 text-white p-2 rounded-full">
                      <User size={24} />
                    </div>
                 </div>
              </div>
              
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-block px-3 py-1 bg-brand-900 rounded-full border border-brand-700 text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
                  Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Mr. Jai Kishan Sharma</h2>
                <p className="text-brand-400 font-medium mb-6">Managing Director</p>
                
                <p className="text-gray-300 leading-relaxed mb-6 text-lg font-light">
                  "With a rich experience of nearly 26 years (1993 – 2019), Mr. Sharma has helped in achieving a number of valued clients with maximum customer satisfaction. His interpersonal communication skills and leadership qualities have helped our team to grow and take the company to greater heights."
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                   <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      <span className="block text-2xl font-bold text-white">26+</span>
                      <span className="text-xs text-gray-400 uppercase">Years Experience</span>
                   </div>
                   <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                      <span className="block text-2xl font-bold text-white">100%</span>
                      <span className="text-xs text-gray-400 uppercase">Commitment</span>
                   </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Vision, Team, Expertise Grid */}
      <div className="container mx-auto px-6 py-24">
         <Reveal direction="up">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Vision Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                 <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Target size={32} />
                 </div>
                 <h3 className="text-xl font-heading font-bold mb-4">Vision & Mission</h3>
                 <p className="text-gray-600 leading-relaxed text-sm">
                   Customer satisfaction is our top priority. We aim to provide high-quality engineered solutions and be the suppliers of the most efficient and cost-effective paper machines in the market.
                 </p>
              </div>

              {/* Team Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                 <div className="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Users size={32} />
                 </div>
                 <h3 className="text-xl font-heading font-bold mb-4">Our Team</h3>
                 <p className="text-gray-600 leading-relaxed text-sm">
                   A team of focused, dedicated, and dynamic engineers guided by highly experienced professionals. We are determined to deliver innovative solutions to meet every requirement.
                 </p>
              </div>

              {/* Expertise Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group">
                 <div className="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <Award size={32} />
                 </div>
                 <h3 className="text-xl font-heading font-bold mb-4">Expertise</h3>
                 <p className="text-gray-600 leading-relaxed text-sm">
                   Time and accuracy are key. We deliver quality products with high precision. We undertake design, manufacturing, erection, and commissioning of new mills and modernization projects on a turnkey basis.
                 </p>
              </div>
           </div>
         </Reveal>
      </div>

      {/* Journey Timeline */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl font-bold text-gray-900">Our Journey</h2>
              <div className="h-1 w-20 bg-brand-500 mx-auto mt-4 rounded-full"></div>
            </div>
          </Reveal>

          <div className="relative">
             {/* Center Line */}
             <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

             <div className="space-y-12 relative">
                {journey.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;
                  return (
                    <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                       <div className="w-full md:w-1/2 p-6">
                          <Reveal direction={isEven ? 'left' : 'right'} delay={index * 100} width="100%">
                             <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 relative ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                                <div className="text-brand-600 font-bold text-xl mb-2">{item.year}</div>
                                <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                
                                {/* Arrow for Desktop */}
                                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 transform rotate-45 ${isEven ? '-right-2 border-l-0 border-b-0' : '-left-2 border-t-0 border-r-0 border-l border-b'}`}></div>
                             </div>
                          </Reveal>
                       </div>
                       
                       <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0 z-10">
                          <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white border-4 border-white shadow-lg">
                             <Icon size={18} />
                          </div>
                       </div>
                       
                       <div className="w-full md:w-1/2 p-6 hidden md:block"></div>
                    </div>
                  );
                })}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper icon for factory (since Factory is already imported in Manufacturing, we define a quick local component or reuse lucide)
const FactoryIcon = ({size, className}: {size?:number, className?:string}) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
    <path d="M17 18h1" />
    <path d="M12 18h1" />
    <path d="M7 18h1" />
  </svg>
);
