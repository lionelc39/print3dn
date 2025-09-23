import React from 'react';
export const Button = ({ children, className='', variant, ...props }) => {
  const base = "inline-flex items-center justify-center rounded-md px-4 py-2 font-medium transition";
  const variants = {
    default: "bg-primary text-white hover:opacity-95",
    outline: "border border-gray-300 bg-transparent"
  };
  const cls = `${base} ${variants[variant] ?? variants.default} ${className}`;
  return <button className={cls} {...props}>{children}</button>
};
