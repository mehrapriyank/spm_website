import React, { useState, useEffect } from 'react';
import './index.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { About } from './components/About';
import { Customers } from './components/Customers';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Brochure } from './components/Brochure';
import { Manufacturing } from './components/Manufacturing';
import { AboutDetailed } from './components/AboutDetailed';
import { Machines } from './components/Machines';

function App() {
  const [currentView, setCurrentView] = useState('home');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const handleNavigate = (viewId: string) => {
    // Map generic IDs to views
    if (viewId === 'home') {
      setCurrentView('home');
    } else if (viewId === 'manufacturing' || viewId === 'services') {
      setCurrentView('manufacturing');
    } else if (viewId === 'machines' || viewId === 'products') {
      setCurrentView('machines');
    } else if (viewId === 'customers') {
      setCurrentView('customers');
    } else if (viewId === 'gallery') {
      setCurrentView('gallery');
    } else if (viewId === 'brochure') {
      setCurrentView('brochure');
    } else if (viewId === 'contact') {
      setCurrentView('contact');
    } else if (viewId === 'about') {
        // About is part of Home view usually, but we can show Home and scroll
        setCurrentView('about');
        setTimeout(() => {
            const element = document.getElementById('about');
            if(element) element.scrollIntoView({behavior: 'smooth'});
        }, 100);
    }
  };

  return (
    
    <div className="font-sans text-gray-900 bg-white selection:bg-brand-200 selection:text-brand-900">
      <Navbar onNavigate={handleNavigate} currentView={currentView} />
      
      <main>
        {currentView === 'home' && (
          <>
            <Hero />
            <Stats />
            <About onNavigate={handleNavigate} />
            <Services />
            <Products />
            <Customers mode="carousel" />
            <Contact />
          </>
        )}

        {currentView === 'manufacturing' && (
          <div className="pt-20">
             <Manufacturing />
             <Contact />
          </div>
        )}

        {currentView === 'machines' && (
           <div className="pt-20">
             <Machines />
             <Contact />
           </div>
        )}

        {currentView === 'customers' && (
          <Customers mode="grid" />
        )}

        {currentView === 'about' && (
          <div className="pt-20">
            <AboutDetailed />
            <Contact />
          </div>
        )}

        {currentView === 'gallery' && (
          <Gallery />
        )}

        {currentView === 'brochure' && (
          <Brochure />
        )}

        {currentView === 'contact' && (
          <div className="pt-20">
            <Contact />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
