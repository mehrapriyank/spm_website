import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';
import { CheckCircle2, Factory, ChevronRight, Settings, PenTool, Truck, Package, Microscope, Hammer, ArrowRight } from 'lucide-react';

export const Manufacturing: React.FC = () => {
  const scopeOfWork = [
    "Basic engineering & designing of process flow diagrams",
    "P & I diagrams of all the area",
    "Metallurgy Test of Mild Steel Plate",
    "Metallurgy Test of Stainless Steel Material",
    "Metallurgy Test of Roll Shaft (Ultrasonic test as per ISO)",
    "Roll hydraulic Testing as per requirement and Standard",
    "Roll dynamic balancing",
    "Stress relieving process of critical machine parts",
    "Roll Inspection (Pipe, Covering, Thickness, Shaft)",
    "Assembly shop testing to avoid erection issues",
    "Standard Paint utilized to protect corrosion"
  ];

  const processSteps = [
    { id: 1, label: "Drawing Development", sub: "AutoCAD & SolidWorks", icon: PenTool },
    { id: 2, label: "Material Order", sub: "Procurement", icon: Package },
    { id: 3, label: "Fabrication", sub: "CNC Plasma Cutting", icon: Factory },
    { id: 4, label: "Precision Machining", sub: "CNC Lathes", icon: Settings },
    { id: 5, label: "Testing", sub: "Quality Control", icon: Microscope },
    { id: 6, label: "Assembly", sub: "Shop Floor", icon: Hammer },
    { id: 7, label: "Painting", sub: "Anti-Corrosion", icon: CheckCircle2 },
    { id: 8, label: "Packing", sub: "Secure Crating", icon: Package },
    { id: 9, label: "Dispatching", sub: "Logistics", icon: Truck },
  ];

  return (
    <section className="bg-white min-h-screen pt-24 pb-24">
      {/* Intro Header */}
      <div className="container mx-auto px-6 mb-20">
        <Reveal direction="up">
          <SectionTitle title="Manufacturing & Erection" subtitle="Our Expertise" />
        </Reveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <Reveal direction="up" delay={100}>
              <p>
                We take pride in the fact that <span className="font-bold text-gray-900">Saloni Paper Machine</span> has the latest technology and advanced equipment to manufacture machines for the paper industry. Our machines are designed for various applications including Writing-Printing Paper, News Print, Kraft Paper, Test Liner, Fluting Media, and Poster Paper, with a wide range of TDP, basis weight, speed, length, and deckle length.
              </p>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p>
                Round-the-year, we innovate and improve our processes, discovering the latest technological developments to create high-end quality products delivered with high precision. We believe that progress is impossible without change, hence we keep working on new concepts to serve our customers better.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <p className="border-l-4 border-brand-500 pl-6 italic text-gray-800 bg-gray-50 py-4 rounded-r-lg">
                In the field of manufacturing, we were once new, but soon won the confidence of our customers, acquiring a name as a reliable and credible supplier. The credit goes to our highly competent team with experience in design, procurement, manufacturing, erection, and commissioning.
              </p>
            </Reveal>
          </div>
          
          <Reveal direction="left" delay={200}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
              <img 
                src="images/manufacturing.jpg" 
                alt="Manufacturing Floor" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="font-heading text-3xl font-bold mb-2">State-of-the-Art Facility</div>
                  <p className="text-brand-100">Located in Vapi G.I.D.C., Gujarat</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Process Flow Grid Design */}
      <div className="bg-brand-950 py-20 overflow-hidden relative">
        {/* Background industrial pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent scale-150" />
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="up">
            <div className="text-center mb-16">
              <h3 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2">Our Process</h3>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">How We Work</h2>
              <p className="text-gray-400 mt-4 max-w-2xl mx-auto">From concept to commissioning, our production line follows a rigorous 9-step quality protocol.</p>
            </div>
          </Reveal>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.id} delay={index * 100} direction="up" width="100%">
                  <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-brand-500 hover:bg-white/10 transition-all duration-300 group flex items-start h-full relative overflow-hidden">
                    {/* Step Number Background */}
                    <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                      {step.id}
                    </div>

                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon size={24} />
                      </div>
                    </div>
                    
                    <div className="flex-grow relative z-10">
                       <h4 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-brand-400 transition-colors">{step.label}</h4>
                       <p className="text-brand-200/70 text-sm uppercase tracking-wider mb-2">{step.sub}</p>
                       
                       {/* Connection Arrow (Visual only) */}
                       {index < processSteps.length - 1 && (
                         <div className="hidden md:block absolute right-0 bottom-0 opacity-0 group-hover:opacity-100 transition-opacity text-brand-500">
                            <ArrowRight size={16} />
                         </div>
                       )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

        </div>
      </div>

      {/* Scope of Work Grid */}
      <div className="container mx-auto px-6 mt-24">
        <Reveal direction="up">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-lg">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">Standard Scope of Work</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Every machine we build undergoes rigorous engineering and testing protocols to ensure international quality standards.
                </p>
                <div className="bg-brand-600 h-2 w-20 rounded-full"></div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {scopeOfWork.map((item, index) => (
                    <Reveal key={index} delay={index * 50} direction="left" width="100%">
                      <div className="flex items-start p-3 hover:bg-white rounded-lg transition-colors group">
                        <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 font-medium text-sm md:text-base group-hover:text-brand-900 transition-colors">
                          {item}
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
