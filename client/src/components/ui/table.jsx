import React from 'react';

export const Table = ({ className, children }) => (
  <div className={`w-full overflow-auto ${className}`}>
    <table className="w-full">
      {children}
    </table>
  </div>
);

export const TableHeader = ({ children }) => (
  <thead className="[&_tr]:border-b">
    {children}
  </thead>
);

export const TableBody = ({ children }) => (
  <tbody className="[&_tr:last-child]:border-0">
    {children}
  </tbody>
);

export const TableRow = ({ className, children }) => (
  <tr className={`border-b transition-colors ${className}`}>
    {children}
  </tr>
);

export const TableHead = ({ className, children }) => (
  <th className={`h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 ${className}`}>
    {children}
  </th>
);

export const TableCell = ({ className, children }) => (
  <td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`}>
    {children}
  </td>
);
