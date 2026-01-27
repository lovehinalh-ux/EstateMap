import React from 'react';
import { CalculationResult } from '../types';

interface ResultDisplayProps {
  result: CalculationResult | null;
  type: 'gift' | 'estate';
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, type }) => {
  if (!result) return null;

  const isZeroTax = result.taxAmount <= 0;

  return (
    <div className="mt-6 bg-[#FAF5EF] rounded-lg p-5 border border-[#E8DCCF]">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">試算結果</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="text-gray-600">課稅淨額</span>
          <span className="font-medium text-lg">
            {result.taxableAmount > 0 
              ? `$${result.taxableAmount.toLocaleString()}` 
              : '$0'}
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-200 pb-2">
          <span className="text-gray-600">適用稅率</span>
          <span className="font-medium text-lg">
            {(result.bracketRate * 100).toFixed(0)}%
          </span>
        </div>

        <div className="flex justify-between items-center pt-2">
          <span className="text-textMain font-bold text-lg">預估應納稅額</span>
          <span className={`font-bold text-2xl ${isZeroTax ? 'text-green-600' : 'text-primary'}`}>
            ${result.taxAmount.toLocaleString()}
          </span>
        </div>
      </div>
      
      {isZeroTax && (
        <p className="text-xs text-green-600 mt-3 text-center font-medium bg-green-50 py-1 rounded">
          恭喜！在免稅額度範圍內，無需繳納{type === 'gift' ? '贈與稅' : '遺產稅'}。
        </p>
      )}
    </div>
  );
};
