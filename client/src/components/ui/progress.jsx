import React from 'react';

export const CircularProgress = ({ value, className }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg
      className={`w-16 h-16 ${className}`}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="text-gray-200"
        stroke="currentColor"
        strokeWidth="8"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
      />
      <circle
        className="text-blue-500"
        stroke="currentColor"
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx="50"
        cy="50"
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
};
