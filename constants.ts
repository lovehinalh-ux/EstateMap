import { TaxBracket } from './types';

// 2024 Gift Tax Exemption: 2.44 Million TWD
export const GIFT_TAX_EXEMPTION = 2440000;

// 2024 Estate Tax Constants
export const ESTATE_TAX_EXEMPTION = 13330000; // 免稅額
export const DEDUCTION_SPOUSE = 5530000;      // 配偶扣除額
export const DEDUCTION_PARENT = 1380000;      // 父母扣除額 (每人)
export const DEDUCTION_CHILD = 560000;        // 直系血親卑親屬扣除額 (每人)
export const DEDUCTION_DISABILITY = 6930000;  // 身心障礙扣除額 (每人)
export const DEDUCTION_FUNERAL = 1380000;     // 喪葬費扣除額

// Gift Tax Brackets
export const GIFT_TAX_BRACKETS: TaxBracket[] = [
  { limit: 25000000, rate: 0.10, deduction: 0 },
  { limit: 50000000, rate: 0.15, deduction: 1250000 },
  { limit: Infinity, rate: 0.20, deduction: 3750000 },
];

// Estate Tax Brackets (Updated for 2025 / ROC Year 114)
export const ESTATE_TAX_BRACKETS: TaxBracket[] = [
  { limit: 56210000, rate: 0.10, deduction: 0 },
  { limit: 112420000, rate: 0.15, deduction: 2810500 },
  { limit: Infinity, rate: 0.20, deduction: 8431500 },
];