import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { ResultDisplay } from './ResultDisplay';
import { CalculatorCard } from './CalculatorCard';
import { GIFT_TAX_EXEMPTION, GIFT_TAX_BRACKETS } from '../constants';
import { calculateTax } from '../utils/taxLogic';
import { CalculationResult } from '../types';

export const GiftTaxCalculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [result, setResult] = useState<CalculationResult | null>(null);

  useEffect(() => {
    const val = parseFloat(amount);
    if (isNaN(val) || val < 0) {
      setResult(null);
      return;
    }

    // Net Amount = Total Gift - Exemption
    const netAmount = val - GIFT_TAX_EXEMPTION;
    const calc = calculateTax(netAmount, GIFT_TAX_BRACKETS);
    setResult(calc);
  }, [amount]);

  return (
    <CalculatorCard
      title="贈與稅試算"
      description="適用於一般贈與案件。每年每位贈與人（出資者）有244萬元的免稅額度，超過部分將依級距課稅。"
      icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="8" width="18" height="4" rx="1"></rect>
          <path d="M12 8v13"></path>
          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
        </svg>
      }
    >
      <div className="space-y-4">
        <Input
          label="年度贈與總金額"
          value={amount}
          onChange={setAmount}
          placeholder="請輸入金額"
          suffix="TWD"
          helperText={`2024年免稅額度：$${(GIFT_TAX_EXEMPTION / 10000).toFixed(0)}萬`}
        />
        
        <ResultDisplay result={result} type="gift" />
      </div>
    </CalculatorCard>
  );
};
