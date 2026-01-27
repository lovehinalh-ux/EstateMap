import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 md:px-12 flex justify-between items-center max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-1">
        <h1 className="text-xl md:text-2xl font-bold text-textMain tracking-tight">
          Mr. Three <span className="font-normal text-gray-600">保險工具箱</span><span className="text-primary">.</span>
        </h1>
      </div>
      
      <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMain">
        <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
          工具庫 
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#" className="hover:text-primary transition-colors">實務指南</a>
        <a href="#" className="hover:text-primary transition-colors">檢核表</a>
        <a href="#" className="hover:text-primary transition-colors">關於本站</a>
        
        <button className="bg-primary hover:bg-[#B06A25] text-white px-6 py-2.5 rounded shadow-sm transition-all transform hover:-translate-y-0.5 font-medium">
          預約諮詢
        </button>
      </div>

      <button className="md:hidden text-textMain">
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <line x1="3" y1="12" x2="21" y2="12"></line>
           <line x1="3" y1="6" x2="21" y2="6"></line>
           <line x1="3" y1="18" x2="21" y2="18"></line>
         </svg>
      </button>
    </header>
  );
};
