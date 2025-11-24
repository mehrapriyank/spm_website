import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      {subtitle && (
        <span className={`block text-sm font-bold tracking-widest uppercase mb-2 ${light ? 'text-brand-300' : 'text-brand-600'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-brand-600 ${centered ? 'mx-auto' : ''} rounded-full`} />
    </div>
  );
};