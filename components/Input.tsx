import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  value: number | string;
  onChange: (val: string) => void;
  // placeholder, className, etc. are already covered by InputHTMLAttributes
  suffix?: string;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ label, value, onChange, placeholder, suffix, helperText, className = "", ...rest }) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-bold mb-2 text-textMain">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          className="shadow-sm appearance-none border border-gray-300 bg-white rounded w-full py-3 px-4 text-gray-900 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder-gray-400"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          {...rest}
        />
        {suffix && (
          <span className="absolute right-4 top-3 text-gray-500 font-medium pointer-events-none">{suffix}</span>
        )}
      </div>
      {helperText && (
        <p className="text-xs text-gray-500 mt-1">{helperText}</p>
      )}
    </div>
  );
};
