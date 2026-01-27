import React from 'react';

export const TaxRateReference: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 relative overflow-hidden">
       <h3 className="text-lg font-bold text-textMain mb-4 flex items-center gap-2">
         <span className="w-1 h-6 bg-gray-300 rounded-full"></span>
         遺產稅課稅級距表 (民國114年適用)
       </h3>
       
       <div className="overflow-x-auto">
         <table className="w-full text-sm text-left border-collapse">
           <thead>
             <tr className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
               <th className="px-4 py-3 whitespace-nowrap">課稅遺產淨額 (元)</th>
               <th className="px-4 py-3 whitespace-nowrap">稅率</th>
               <th className="px-4 py-3 whitespace-nowrap">累進差額 (元)</th>
             </tr>
           </thead>
           <tbody className="divide-y divide-gray-100">
             <tr className="hover:bg-gray-50/50 transition-colors">
               <td className="px-4 py-3 text-textMain">56,210,000 以下</td>
               <td className="px-4 py-3 text-primary font-bold">10%</td>
               <td className="px-4 py-3 text-gray-500">0</td>
             </tr>
             <tr className="hover:bg-gray-50/50 transition-colors">
               <td className="px-4 py-3 text-textMain">56,210,001 - 112,420,000</td>
               <td className="px-4 py-3 text-primary font-bold">15%</td>
               <td className="px-4 py-3 text-gray-500">2,810,500</td>
             </tr>
             <tr className="hover:bg-gray-50/50 transition-colors">
               <td className="px-4 py-3 text-textMain">112,420,001 以上</td>
               <td className="px-4 py-3 text-primary font-bold">20%</td>
               <td className="px-4 py-3 text-gray-500">8,431,500</td>
             </tr>
           </tbody>
         </table>
       </div>
       <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-500 leading-relaxed">
         <span className="font-bold text-gray-600">計算公式：</span>
         應納遺產稅額 = 課稅遺產淨額 × 稅率 - 累進差額 - 扣抵稅額及利息
         <br/>
         <span className="text-gray-400 block mt-1">(本工具僅計算至扣除累進差額之金額)</span>
       </div>
    </div>
  );
};