import React from 'react';
import { cva } from 'class-variance-authority';

const cardVariants = cva(
  'rounded-lg transition-all duration-200',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-sm hover:shadow',
        elevated: 'bg-white shadow-md hover:shadow-lg',
        outlined: 'bg-white border-2 border-gray-200 hover:border-gray-300',
        ghost: 'bg-gray-50/50 hover:bg-gray-100/50',
        gradient: 'bg-gradient-to-br from-white to-gray-50',
        glass: 'bg-white/70 backdrop-blur-lg shadow-sm hover:shadow',
      },
      hoverable: {
        true: 'transform-gpu hover:-translate-y-1 transition-transform duration-200',
        false: '',
      }
    },
    defaultVariants: {
      variant: 'default',
      hoverable: false,
    }
  }
);

export const Card = React.forwardRef(({ 
  className = '',
  variant = 'default',
  hoverable = false,
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={cardVariants({ variant, hoverable, className })}
    {...props}
  >
    {children}
  </div>
));

Card.displayName = 'Card';

const headerVariants = cva(
  'flex items-center gap-4',
  {
    variants: {
      variant: {
        default: 'px-6 py-4 border-b border-gray-200',
        clean: 'px-6 py-4',
        gradient: 'px-6 py-4 bg-gradient-to-r from-gray-50 to-transparent border-b border-gray-200',
        colored: 'px-6 py-4 bg-gray-50 border-b border-gray-200',
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export const CardHeader = React.forwardRef(({ 
  className = '',
  variant = 'default',
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={headerVariants({ variant, className })}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

const titleVariants = cva(
  'font-semibold leading-none tracking-tight',
  {
    variants: {
      size: {
        default: 'text-lg',
        sm: 'text-base',
        lg: 'text-xl',
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

export const CardTitle = React.forwardRef(({ 
  className = '',
  size = 'default',
  children,
  ...props 
}, ref) => (
  <h3
    ref={ref}
    className={titleVariants({ size, className })}
    {...props}
  >
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

const contentVariants = cva(
  'text-gray-600',
  {
    variants: {
      padding: {
        default: 'p-6',
        compact: 'p-4',
        spacious: 'p-8',
        none: 'p-0',
      }
    },
    defaultVariants: {
      padding: 'default'
    }
  }
);

export const CardContent = React.forwardRef(({ 
  className = '',
  padding = 'default',
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={contentVariants({ padding, className })}
    {...props}
  >
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

// Optional footer component
export const CardFooter = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={`px-6 py-4 border-t border-gray-200 ${className}`}
    {...props}
  >
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';

// Optional description component
export const CardDescription = React.forwardRef(({ 
  className = '',
  children,
  ...props 
}, ref) => (
  <p
    ref={ref}
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';