import React from 'react';
import { APP_NAME, CONTACT_INFO } from '../constants';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 text-white border-t border-brand-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="font-heading text-2xl font-bold tracking-tighter uppercase">
              {APP_NAME.split(' ')[0]} <span className="text-brand-500">{APP_NAME.split(' ')[1] + " " +APP_NAME.split(' ')[2]}</span> <span className="block text-sm font-sans font-normal opacity-70 normal-case tracking-normal">Pvt. Ltd.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              A premier manufacturer of Paper Machinery and Pulp Mill Equipment. Providing turnkey solutions and engineering excellence from Vapi, Gujarat since 2004.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 transition-all duration-300 text-gray-300 hover:text-white hover:-translate-y-1">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 transition-all duration-300 text-gray-300 hover:text-white hover:-translate-y-1">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white border-b-2 border-brand-600 inline-block pb-1">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-brand-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>About Us</a></li>
              <li><a href="#products" className="hover:text-brand-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Machine Catalogue</a></li>
              <li><a href="#services" className="hover:text-brand-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Services</a></li>
              <li><a href="#projects" className="hover:text-brand-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Projects</a></li>
              <li><a href="#contact" className="hover:text-brand-400 transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-bold mb-6 text-white border-b-2 border-brand-600 inline-block pb-1">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-brand-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
               {CONTACT_INFO.altPhone && (
                <li className="flex items-center pl-8">
                  <span>{CONTACT_INFO.altPhone}</span>
                </li>
              )}
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-brand-900 bg-black/20 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Saloni Paper Machines Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0 text-sm text-gray-500">
             <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
             <a href="#" className="hover:text-brand-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};