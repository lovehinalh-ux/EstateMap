import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { TaxRateReference } from './TaxRateReference';
import { 
  ESTATE_TAX_EXEMPTION, 
  ESTATE_TAX_BRACKETS,
  DEDUCTION_SPOUSE,
  DEDUCTION_PARENT,
  DEDUCTION_CHILD,
  DEDUCTION_DISABILITY,
  DEDUCTION_FUNERAL
} from '../constants';
import { calculateTax } from '../utils/taxLogic';
import { CalculationResult } from '../types';

export const EstateTaxCalculator: React.FC = () => {
  // Input States
  const [totalAssets, setTotalAssets] = useState<string>('');
  const [hasSpouse, setHasSpouse] = useState<boolean>(true);
  const [childrenCount, setChildrenCount] = useState<number>(0);
  const [parentCount, setParentCount] = useState<number>(0);
  const [disabilityCount, setDisabilityCount] = useState<number>(0);
  const [otherDeductions, setOtherDeductions] = useState<string>('');

  // Result States
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [totalDeductionAmount, setTotalDeductionAmount] = useState<number>(0);
  const [formattedAssets, setFormattedAssets] = useState<number>(0);

  useEffect(() => {
    const assetVal = parseFloat(totalAssets);
    const otherDeductVal = parseFloat(otherDeductions);
    const safeAssetVal = isNaN(assetVal) ? 0 : assetVal;
    
    setFormattedAssets(safeAssetVal);

    // Calculate Total Deductions
    let currentDeductions = 0;
    
    // Deductions
    // Fixed/Mandatory Deductions: Funeral Cost
    currentDeductions += DEDUCTION_FUNERAL;

    if (hasSpouse) currentDeductions += DEDUCTION_SPOUSE;
    currentDeductions += (childrenCount * DEDUCTION_CHILD);
    currentDeductions += (parentCount * DEDUCTION_PARENT);
    currentDeductions += (disabilityCount * DEDUCTION_DISABILITY);
    
    if (!isNaN(otherDeductVal)) currentDeductions += otherDeductVal;

    // Add Basic Exemption (13.33M) to the total "Deductions & Exemptions" figure for display
    const totalExemptionsAndDeductions = ESTATE_TAX_EXEMPTION + currentDeductions;
    setTotalDeductionAmount(totalExemptionsAndDeductions);

    if (safeAssetVal > 0) {
      // Net Amount = Assets - (Exemptions + Deductions)
      const netAmount = safeAssetVal - totalExemptionsAndDeductions;
      const calc = calculateTax(netAmount, ESTATE_TAX_BRACKETS);
      setResult(calc);
    } else {
      setResult(null);
    }
  }, [totalAssets, hasSpouse, childrenCount, parentCount, disabilityCount, otherDeductions]);

  // Helper Components
  const Counter = ({ label, value, onChange, max = 10 }: { label: string, value: number, onChange: (v: number) => void, max?: number }) => (
    <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">
      <span className="text-gray-700 font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          -
        </button>
        <span className="w-6 text-center font-bold text-textMain">{value}</span>
        <button 
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary/20 flex items-center justify-center transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );

  const Toggle = ({ label, checked, onChange, subtext }: { label: string, checked: boolean, onChange: (v: boolean) => void, subtext?: string }) => (
    <div 
      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 cursor-pointer group"
      onClick={() => onChange(!checked)}
    >
      <div className="flex flex-col">
        <span className="text-gray-700 font-medium group-hover:text-primary transition-colors">{label}</span>
        {subtext && <span className="text-xs text-gray-400">{subtext}</span>}
      </div>
      <div className={`w-11 h-6 flex items-center rounded-full p-1 duration-300 ease-in-out ${checked ? 'bg-primary' : 'bg-gray-300'}`}>
        <div className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    </div>
  );

  const FixedToggle = ({ label, subtext }: { label: string, subtext?: string }) => (
    <div 
      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 cursor-not-allowed opacity-80"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">{label}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-100 text-primary font-bold">必選</span>
        </div>
        {subtext && <span className="text-xs text-gray-400">{subtext}</span>}
      </div>
      <div className="w-11 h-6 flex items-center rounded-full p-1 bg-primary">
        <div className="bg-white w-4 h-4 rounded-full shadow-md transform translate-x-5"></div>
      </div>
    </div>
  );

  const SummaryRow = ({ label, value, isHighlight = false, isNegative = false }: { label: string, value: string, isHighlight?: boolean, isNegative?: boolean }) => (
    <div className="flex justify-between items-center py-1">
      <span className={`${isHighlight ? 'text-gray-800 font-bold' : 'text-gray-500'}`}>{label}</span>
      <span className={`${isHighlight ? 'text-2xl font-bold text-primary' : 'font-medium text-gray-800'} ${isNegative ? 'text-red-500' : ''}`}>
        {value}
      </span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* Left Column: Inputs (8 cols) */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 relative overflow-hidden">
          {/* Decorative left border */}
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary"></div>
          
          <h3 className="text-xl font-bold text-textMain mb-6 flex items-center gap-2">
            <span className="bg-orange-50 p-2 rounded text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </span>
            資產與扣除額設定
          </h3>

          <div className="space-y-8">
            <section>
              <Input
                label="遺產總額"
                value={totalAssets}
                onChange={setTotalAssets}
                placeholder="請輸入遺產總市值"
                suffix="TWD"
                helperText="包含不動產、存款、股票、保單價值等"
              />
            </section>

            <section>
              <label className="block text-sm font-bold mb-3 text-textMain">扣除額項目勾選</label>
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-5 space-y-1">
                <FixedToggle 
                    label="免稅額" 
                    subtext={`扣除 $${(ESTATE_TAX_EXEMPTION/10000).toLocaleString()} 萬`}
                />
                
                <FixedToggle 
                    label="喪葬費 (標準扣除)" 
                    subtext={`扣除 $${(DEDUCTION_FUNERAL/10000).toLocaleString()} 萬`}
                />

                <Toggle 
                  label="有配偶" 
                  checked={hasSpouse} 
                  onChange={setHasSpouse}
                  subtext={`扣除 $${(DEDUCTION_SPOUSE/10000).toLocaleString()} 萬`}
                />
                
                <Counter 
                  label="子女 (每人56萬)" 
                  value={childrenCount} 
                  onChange={setChildrenCount} 
                />
                
                <Counter 
                  label="父母 (每人138萬)" 
                  value={parentCount} 
                  onChange={setParentCount} 
                  max={2}
                />

                <Counter 
                  label="身心障礙親屬 (每人693萬)" 
                  value={disabilityCount} 
                  onChange={setDisabilityCount} 
                />
              </div>
            </section>

            <section>
              <Input
                label="其他扣除額"
                value={otherDeductions}
                onChange={setOtherDeductions}
                placeholder="債務、未償稅款、捐贈等"
                suffix="TWD"
              />
            </section>
          </div>
        </div>
        
        {/* Tax Rate Bracket Table Component */}
        <TaxRateReference />

      </div>

      {/* Right Column: Sticky Summary (4 cols) */}
      <div className="lg:col-span-4 sticky top-6">
        <div className="bg-white rounded-xl shadow-lg border border-primary/20 p-6 md:p-8">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 pb-2 border-b border-gray-100">
            即時計算摘要
          </h3>

          <div className="space-y-4">
            <SummaryRow 
              label="▸ 遺產總額" 
              value={`$${formattedAssets.toLocaleString()}`} 
            />
            
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-500">▸ 扣除合計</span>
              <span className="font-medium text-green-600">
                -${totalDeductionAmount.toLocaleString()}
              </span>
            </div>
             {/* Removed Exemption helper text here */}

            <div className="border-t border-dashed border-gray-200 my-2"></div>

            <SummaryRow 
              label="▸ 應稅遺產" 
              value={`$${result ? result.taxableAmount.toLocaleString() : '0'}`} 
            />

            <div className="bg-[#FAF5EF] -mx-6 px-6 py-4 mt-4 border-t border-b border-orange-100">
               <div className="flex justify-between items-baseline mb-1">
                 <span className="text-primary font-bold">預估遺產稅</span>
                 <span className="text-3xl font-extrabold text-primary">
                   ${result ? result.taxAmount.toLocaleString() : '0'}
                 </span>
               </div>
               {result && result.bracketRate > 0 && (
                 <p className="text-xs text-right text-primary/70">
                   適用稅率 {(result.bracketRate * 100).toFixed(0)}%
                 </p>
               )}
            </div>
          </div>

          <div className="mt-8 space-y-3">
             <div className="p-3 bg-gray-50 rounded text-xs text-gray-500 leading-relaxed">
               <span className="font-bold text-gray-600">💡 節稅小撇步：</span>
               妥善規劃保險預留稅源，不僅能覆蓋預估稅額，還能指定受益人，讓資產傳承更順利。
             </div>

             <button className="w-full bg-primary hover:bg-[#B06A25] text-white font-bold py-3 px-4 rounded shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
               <span>預約專業稅務諮詢</span>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
             </button>
          </div>
        </div>
      </div>

    </div>
  );
};