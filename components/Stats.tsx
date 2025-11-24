import React, { useEffect, useState, useRef } from 'react';
import { STATISTICS } from '../constants';

const Counter = ({ end, duration = 2000, suffix = '' }: { end: string, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  // Parse the number from the string (handling "100+" etc)
  const endNum = parseInt(end.replace(/[^0-9]/g, '')) || 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * endNum));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, endNum, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-brand-950 relative overflow-hidden border-b border-brand-900">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-900/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {STATISTICS.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-bold text-white mb-4 font-heading tracking-tighter group-hover:text-brand-400 transition-colors duration-300">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="h-1 w-12 bg-brand-700 mx-auto mb-4 rounded-full group-hover:w-20 transition-all duration-300"></div>
              <div className="text-brand-100 text-sm uppercase tracking-widest font-semibold opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};