import { TaxBracket, CalculationResult } from '../types';

export const calculateTax = (netAmount: number, brackets: TaxBracket[]): CalculationResult => {
  if (netAmount <= 0) {
    return { taxableAmount: 0, taxAmount: 0, bracketRate: 0 };
  }

  // Find the applicable bracket
  const bracket = brackets.find(b => netAmount <= b.limit) || brackets[brackets.length - 1];

  const taxAmount = (netAmount * bracket.rate) - bracket.deduction;

  return {
    taxableAmount: netAmount,
    taxAmount: Math.max(0, taxAmount),
    bracketRate: bracket.rate
  };
};
