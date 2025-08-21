import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const baseStyle = 'px-4 py-2 rounded font-medium';
  const variantStyle = variant === 'primary' 
    ? 'bg-blue-500 text-white hover:bg-blue-600' 
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300';

  return (
    <button 
      className={`${baseStyle} ${variantStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}