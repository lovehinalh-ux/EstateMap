export interface TaxBracket {
  limit: number;
  rate: number;
  deduction: number;
}

export interface CalculationResult {
  taxableAmount: number;
  taxAmount: number;
  bracketRate: number;
}
