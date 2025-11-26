import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { NAV_ITEMS, APP_NAME, CONTACT_INFO, LOGO } from '../constants';

interface NavbarProps {
  onNavigate: (view: string) => void;
  currentView: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setIsScrolled(window.scrollY > 20);

      // Handle scroll progress bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        setScrollProgress(scroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-1 border-b border-gray-100' 
            : 'bg-gradient-to-b from-black/70 to-transparent py-2'
        }`}
      >
        
        {/* Top Bar (Hidden on mobile, visible on large screens when not scrolled) */}
        <div className={`hidden lg:block container mx-auto px-6 mb-2 transition-all duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden mb-0' : 'opacity-100'}`}>
          <div className="flex justify-end items-center space-x-6 text-sm text-gray-200 border-b border-white/20 pb-2">
            <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center hover:text-white transition-colors font-medium">
              <Phone className="w-3.5 h-3.5 mr-2 text-brand-400" />
              <span>{CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-white transition-colors font-medium">
              <Mail className="w-3.5 h-3.5 mr-2 text-brand-400" />
              <span>{CONTACT_INFO.email}</span>
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-row flex-wrap items-center min-h-[56px] justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center min-w-[120px] mr-2">
              <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center group relative z-50">
                <img 
                  src={LOGO} 
                  alt={APP_NAME}
                  className={`h-10 md:h-12 transition-opacity duration-300 max-w-[160px] ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
                  style={{ marginRight: '0.5rem' }}
                  onError={(e) => {
                    // Fallback to text if image fails to load
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <div className="hidden font-heading text-xl md:text-2xl font-bold tracking-tighter uppercase transition-colors duration-300" style={{ display: LOGO ? 'none' : 'block' }}>
                  <span className={isScrolled ? 'text-brand-950' : 'text-white'}>{APP_NAME.split(' ')[0]}</span> <span className="text-brand-500">{APP_NAME.split(' ')[1] + " " + APP_NAME.split(' ')[2]}</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-row flex-wrap items-center space-x-5">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-[11px] font-medium tracking-wide transition-colors duration-300 hover:text-brand-500 uppercase ${isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'}`}
                  style={{ padding: '0.15rem 0.35rem', whiteSpace: 'nowrap', minWidth: 'auto' }}
                >
                  {item.label}
                </a>
              ))}

              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-md transform hover:-translate-y-0.5 ${
                  isScrolled 
                    ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-500/20' 
                    : 'bg-white text-brand-900 hover:bg-gray-100 shadow-black/20'
                }`}
                style={{ marginLeft: '0.25rem', whiteSpace: 'nowrap', minWidth: 'auto' }}
              >
                Get Quote
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex-shrink-0 ml-auto lg:hidden">
              <button
                className={`p-2 rounded-md z-50 relative transition-colors ${isScrolled || isOpen ? 'text-gray-800' : 'text-white'}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Moved outside header to prevent containing block clipping issues */}
      <div className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="flex flex-col space-y-6 text-center overflow-y-auto max-h-[80vh] px-6 py-8 w-full">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-xl font-heading font-bold text-gray-800 hover:text-brand-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};