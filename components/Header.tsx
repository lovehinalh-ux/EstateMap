import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-orange-100 py-4 px-4 md:px-12 flex justify-between items-center w-full shadow-sm transition-all duration-300">
      <div className="flex items-center gap-1 max-w-7xl mx-auto w-full justify-between">
        <h1 className="text-xl md:text-2xl font-bold text-textMain tracking-tight">
          Mr. Three 保險工具箱 | 遺產稅試算工具
        </h1>

        <div className="flex items-center space-x-8 text-sm font-medium text-textMain">
          <a
            href="https://personal-intro-blue.zeabur.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-[#B06A25] text-white px-5 py-2 rounded shadow-sm transition-all transform hover:-translate-y-0.5 font-medium flex items-center gap-2"
          >
            <span>回到Mr. Three保險工具箱</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};
