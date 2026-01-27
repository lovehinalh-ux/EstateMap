import React from 'react';
import { Header } from './components/Header';
import { EstateTaxCalculator } from './components/EstateTaxCalculator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 md:px-12 py-12">
        <div className="text-center mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-3 block">
            專業工具庫
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">
            遺產稅試算工具
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            依據 2024 年最新稅法，協助您快速盤點資產狀況。
            <br className="hidden md:inline"/>
            透過右側即時試算面板，精準掌握預估稅額與扣除額度。
          </p>
        </div>

        {/* Removed Grid wrapper here, passing control to the component itself for the split layout */}
        <EstateTaxCalculator />
      </main>

      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-200/50 mt-12">
        <p>&copy; 2024 Mr. Three 保險工具箱. All rights reserved.</p>
        <p className="mt-2 text-xs">本試算結果僅供參考，實際稅額以國稅局核定為準。</p>
      </footer>
    </div>
  );
};

export default App;
