import React from 'react';
export const Card = ({ children, className='' }) => (
  <div className={`bg-card p-4 rounded-lg shadow-sm ${className}`}>{children}</div>
);
export const CardHeader = ({ children }) => <div className="mb-2">{children}</div>;
export const CardContent = ({ children }) => <div>{children}</div>;
export const CardTitle = ({ children }) => <h3 className="font-semibold">{children}</h3>;
export const CardDescription = ({ children }) => <p className="text-sm text-muted mt-1">{children}</p>;
