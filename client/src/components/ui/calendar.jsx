import React from 'react';

export const Calendar = ({ className }) => (
  <div className={`border rounded-md p-2 ${className}`}>
    <div className="flex justify-between items-center mb-2">
      <button>{'<'}</button>
      <span>Month Year</span>
      <button>{'>'}</button>
    </div>
    <div className="grid grid-cols-7 gap-1">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
        <div key={day} className="text-center text-sm font-medium">
          {day}
        </div>
      ))}
      {Array.from({ length: 35 }).map((_, i) => (
        <div key={i} className="text-center p-1 rounded hover:bg-gray-100">
          {i + 1}
        </div>
      ))}
    </div>
  </div>
);
