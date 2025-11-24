import React, {useState} from 'react';
import { CONTACT_INFO } from '../constants';
import { SectionTitle } from './SectionTitle';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", "f93854f6-d74a-4657-a5af-7231a1806838");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        (event.target as HTMLFormElement).reset();
      } else {
        setResult("Error sending message. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal direction="up">
          <SectionTitle title="Get In Touch" subtitle="Start Your Project" />
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-8 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12">
          {/* Contact Info (Left Side) */}
          <div className="w-full lg:w-5/12 bg-brand-950 p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-brand-800 rounded-full -mr-40 -mt-40 opacity-30 blur-3xl" />
             <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-600 rounded-full -ml-20 -mb-20 opacity-20 blur-2xl" />
             
             <div className="relative z-10 h-full flex flex-col">
                <Reveal delay={100}>
                  <h3 className="text-3xl font-bold font-heading mb-6">Contact Information</h3>
                  <p className="text-brand-100 mb-12 leading-relaxed text-lg font-light">
                    Ready to upgrade your plant or start a new project? Our expert engineers are ready to assist you.
                  </p>
                </Reveal>

                <div className="space-y-8 mt-auto">
                  <Reveal delay={200} direction="right">
                    <div className="flex items-start group">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
                        <MapPin className="w-6 h-6 text-brand-400 group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-lg">Our Location</h4>
                        <p className="text-brand-100 leading-relaxed">{CONTACT_INFO.address}</p>
                      </div>
                    </div>
                  </Reveal>
                  
                  <Reveal delay={300} direction="right">
                    <div className="flex items-center group">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
                        <Phone className="w-6 h-6 text-brand-400 group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-lg">Phone Number</h4>
                        <p className="text-brand-100">{CONTACT_INFO.phone}</p>
                      </div>
                    </div>
                  </Reveal>

                  <Reveal delay={400} direction="right">
                    <div className="flex items-center group">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
                        <Mail className="w-6 h-6 text-brand-400 group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-lg">Email Address</h4>
                        <p className="text-brand-100">{CONTACT_INFO.email}</p>
                      </div>
                    </div>
                  </Reveal>

                   <Reveal delay={500} direction="right">
                    <div className="flex items-center group">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mr-4 group-hover:bg-brand-600 transition-colors">
                        <Clock className="w-6 h-6 text-brand-400 group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-1 text-lg">Working Hours</h4>
                        <p className="text-brand-100">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
             </div>
          </div>

          {/* Form (Right Side) */}
          <div className="w-full lg:w-7/12 p-12 bg-gray-50/50">
            <Reveal delay={300} direction="up">
              <form className="space-y-6" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider">First Name</label>
                    <input 
                      type="text" 
                      name="first_name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Last Name</label>
                    <input 
                      type="text" 
                      name="last_name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                      placeholder="+1 (555) 000-0000"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Project Type</label>
                  <div className="relative">
                    <select name="project_type" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white appearance-none" required>
                      <option value="">Select a project type</option>
                      <option value="New Paper Machine">New Paper Machine</option>
                      <option value="Plant Upgrade">Plant Upgrade</option>
                      <option value="Spare Parts">Spare Parts</option>
                      <option value="Consultancy">Consultancy</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all bg-white"
                    placeholder="Tell us about your project requirements..."
                    required
                  />
                </div>

                {result && (
                  <div className={`p-4 rounded-lg text-sm font-medium ${
                    result.includes('successfully') 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}>
                    {result}
                  </div>
                )}

                <Button type="submit" disabled={isLoading} className="w-full md:w-auto px-8 py-4 text-lg shadow-xl shadow-brand-500/20 disabled:opacity-60">
                  <span className="flex items-center">{isLoading ? 'Sending...' : 'Send Message'} {!isLoading && <Send className="ml-2 w-4 h-4" />}</span>
                </Button>
              </form>
            </Reveal>
          </div>
        </div>

        {/* Map Section */}
        <Reveal delay={50} width="100%">
            <div className="rounded-3xl overflow-hidden shadow-lg h-80 border border-gray-100 relative group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5235.779441133327!2d72.95314211193647!3d20.360685910308124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0cfd3a7cfb925%3A0x8aa59ff8cc39fff6!2sSaloni%20Paper%20Machines%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1763977033499!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700 no-iframe-border"
                    title="Saloni Paper Machines Location"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-3xl"></div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};