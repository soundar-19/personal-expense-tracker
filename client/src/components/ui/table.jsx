import React from 'react';
import { cva } from 'class-variance-authority';

const tableVariants = cva(
  'w-full',
  {
    variants: {
      variant: {
        default: 'bg-white',
        striped: '[&_tbody_tr:nth-child(odd)]:bg-gray-50',
        bordered: 'border border-gray-200 [&_td]:border-r [&_th]:border-r [&_tr]:border-b',
        hoverable: '[&_tbody_tr:hover]:bg-gray-50',
        minimal: ''
      },
      size: {
        default: '[&_td]:p-4 [&_th]:p-4',
        sm: '[&_td]:p-2 [&_th]:p-2',
        lg: '[&_td]:p-6 [&_th]:p-6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export const Table = React.forwardRef(({ 
  className = '', 
  variant,
  size,
  stickyHeader = false,
  children,
  ...props 
}, ref) => (
  <div 
    className={`w-full overflow-auto rounded-lg ${stickyHeader ? 'max-h-[85vh]' : ''}`}
  >
    <table
      ref={ref}
      className={tableVariants({ variant, size, className })}
      {...props}
    >
      {children}
    </table>
  </div>
));

Table.displayName = 'Table';

const headerVariants = cva(
  'bg-gray-50 text-left [&_tr]:border-b border-gray-200',
  {
    variants: {
      sticky: {
        true: 'sticky top-0 z-10',
        false: ''
      }
    },
    defaultVariants: {
      sticky: false
    }
  }
);

export const TableHeader = React.forwardRef(({ 
  className = '',
  sticky = false,
  children,
  ...props 
}, ref) => (
  <thead
    ref={ref}
    className={headerVariants({ sticky, className })}
    {...props}
  >
    {children}
  </thead>
));

TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <tbody
    ref={ref}
    className={`[&_tr:last-child]:border-0 ${className}`}
    {...props}
  >
    {children}
  </tbody>
));

TableBody.displayName = 'TableBody';

const rowVariants = cva(
  'border-b border-gray-200 transition-colors',
  {
    variants: {
      variant: {
        default: '',
        selected: 'bg-blue-50',
        success: 'bg-green-50',
        error: 'bg-red-50',
        warning: 'bg-yellow-50'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export const TableRow = React.forwardRef(({ 
  className = '',
  variant,
  children,
  ...props 
}, ref) => (
  <tr
    ref={ref}
    className={rowVariants({ variant, className })}
    {...props}
  >
    {children}
  </tr>
));

TableRow.displayName = 'TableRow';

const headVariants = cva(
  'h-12 align-middle font-medium text-gray-500 [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      },
      sortable: {
        true: 'cursor-pointer hover:text-gray-700',
        false: ''
      }
    },
    defaultVariants: {
      align: 'left',
      sortable: false
    }
  }
);

export const TableHead = React.forwardRef(({ 
  className = '',
  align,
  sortable,
  children,
  ...props 
}, ref) => (
  <th
    ref={ref}
    className={headVariants({ align, sortable, className })}
    {...props}
  >
    {children}
  </th>
));

TableHead.displayName = 'TableHead';

const cellVariants = cva(
  'align-middle [&:has([role=checkbox])]:pr-0',
  {
    variants: {
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right'
      },
      truncate: {
        true: 'truncate max-w-[200px]',
        false: ''
      }
    },
    defaultVariants: {
      align: 'left',
      truncate: false
    }
  }
);

export const TableCell = React.forwardRef(({ 
  className = '',
  align,
  truncate,
  children,
  ...props 
}, ref) => (
  <td
    ref={ref}
    className={cellVariants({ align, truncate, className })}
    {...props}
  >
    {children}
  </td>
));

TableCell.displayName = 'TableCell';

// Optional footer component
export const TableFooter = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <tfoot
    ref={ref}
    className={`bg-gray-50 border-t border-gray-200 ${className}`}
    {...props}
  >
    {children}
  </tfoot>
));

TableFooter.displayName = 'TableFooter';