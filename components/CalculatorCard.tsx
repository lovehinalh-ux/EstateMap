import React from 'react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const CalculatorCard: React.FC<CalculatorCardProps> = ({ title, description, icon, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full relative group hover:shadow-md transition-shadow duration-300">
      {/* Orange left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
      
      <div className="p-8 pl-10 flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-orange-50 rounded-lg text-primary">
             {icon}
          </div>
          <h2 className="text-2xl font-bold text-textMain">{title}</h2>
        </div>
        
        <p className="text-gray-500 mb-8 leading-relaxed">
          {description}
        </p>
        
        {children}
      </div>
    </div>
  );
};
