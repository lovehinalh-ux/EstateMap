import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#172D5B] border-b border-white/10 py-4 px-4 md:px-12 flex justify-between items-center w-full shadow-md transition-all duration-300">
      <div className="flex items-center gap-1 max-w-7xl mx-auto w-full justify-between">
        <div className="flex items-center gap-3">
          <div
            style={{ fontFamily: '"DM Serif Display", Georgia, serif' }}
            className="w-8 h-8 rounded-full bg-[#9E741C] flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          >
            3
          </div>
          <div>
            <div style={{ fontFamily: '"DM Serif Display", Georgia, serif' }} className="text-base font-bold text-white leading-tight tracking-tight">
              Mr. Three
            </div>
            <div className="text-xs text-white/45 leading-none">遺產稅試算工具</div>
          </div>
        </div>

        <a
          href="https://personal-intro-blue.zeabur.app/"
          className="bg-[#9E741C] hover:bg-[#7D5D12] text-white px-5 py-2 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5 font-medium flex items-center gap-2 text-sm"
        >
          <span>回到工具箱</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </a>
      </div>
    </header>
  );
};
