import React from 'react';

export const Card = ({ className, children }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="px-6 py-4 border-b border-gray-200">
    {children}
  </div>
);

export const CardTitle = ({ children }) => (
  <h3 className="text-lg font-semibold text-gray-900">
    {children}
  </h3>
);

export const CardContent = ({ children }) => (
  <div className="p-6">
    {children}
  </div>
);
