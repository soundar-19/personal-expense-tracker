import React from 'react';
import { cva } from 'class-variance-authority';

const labelVariants = cva(
  'block text-sm font-medium transition-colors duration-200', 
  {
    variants: {
      variant: {
        default: 'text-gray-700',
        required: 'text-gray-700 after:content-["*"] after:ml-0.5 after:text-red-500',
        error: 'text-red-500',
        success: 'text-green-600',
        disabled: 'text-gray-400',
        contrast: 'text-gray-900',
      },
      size: {
        default: 'text-sm',
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg'
      },
      weight: {
        default: 'font-medium',
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      weight: 'default'
    }
  }
);

const Label = React.forwardRef(({ 
  htmlFor,
  children,
  className = '',
  variant,
  size,
  weight,
  optional = false,
  ...props 
}, ref) => {
  return (
    <label
      ref={ref}
      htmlFor={htmlFor}
      className={labelVariants({ variant, size, weight, className })}
      {...props}
    >
      {children}
      {optional && (
        <span className="ml-1 text-gray-400 text-xs font-normal">
          (optional)
        </span>
      )}
    </label>
  );
});

Label.displayName = 'Label';

export default Label;