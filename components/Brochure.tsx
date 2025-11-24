import React from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Brochure: React.FC = () => {
  return (
    <section id="brochure" className="py-24 bg-brand-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 pt-20">
        <Reveal direction="up">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 bg-brand-900 p-12 text-white flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.2),transparent_70%)]" />
              <div className="relative z-10">
                <FileText className="w-16 h-16 mb-6 text-brand-400" />
                <h2 className="text-3xl font-heading font-bold mb-4">Download Corporate Brochure</h2>
                <p className="text-brand-100 mb-8 leading-relaxed">
                  Get detailed specifications, machine diagrams, and comprehensive service information in our latest digital brochure.
                </p>
                <div className="space-y-3 text-sm text-brand-200">
                  <p>• 16-Page Full Color PDF</p>
                  <p>• Technical Specifications Included</p>
                  <p>• Detailed Project References</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-12 flex flex-col justify-center items-center text-center bg-gray-50">
              <div className="w-48 h-64 bg-white shadow-xl border border-gray-200 mb-8 flex items-center justify-center relative group cursor-pointer hover:scale-105 transition-transform">
                 <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
                 <span className="relative z-10 font-heading font-bold text-gray-300 text-xl">PREVIEW</span>
              </div>
              <Button className="w-full md:w-auto shadow-brand-500/20">
                <span className="flex items-center justify-center">
                  Download PDF <Download className="ml-2 w-4 h-4" />
                </span>
              </Button>
              <p className="mt-4 text-xs text-gray-400">File size: 4.2 MB • PDF Format</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};