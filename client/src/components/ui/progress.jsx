import React, { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';

const progressVariants = cva('transition-all duration-300', {
  variants: {
    size: {
      sm: 'w-12 h-12',
      md: 'w-16 h-16',
      lg: 'w-24 h-24',
      xl: 'w-32 h-32'
    },
    variant: {
      default: 'text-blue-500',
      success: 'text-green-500',
      warning: 'text-yellow-500',
      error: 'text-red-500',
      gradient: '' // Handled separately with gradient
    },
    track: {
      default: 'text-gray-200',
      light: 'text-gray-100',
      dark: 'text-gray-300',
      transparent: 'text-transparent'
    }
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
    track: 'default'
  }
});

export const CircularProgress = React.forwardRef(({
  value = 0,
  className = '',
  size = 'md',
  variant = 'default',
  track = 'default',
  thickness = 8,
  showValue = false,
  animate = true,
  label,
  ...props
}, ref) => {
  const [progress, setProgress] = useState(0);
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  
  // Animate progress on mount and when value changes
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animate]);

  const offset = circumference - (progress / 100) * circumference;

  const getGradientId = () => `progress-gradient-${Math.random().toString(36).substr(2, 9)}`;
  const gradientId = variant === 'gradient' ? getGradientId() : '';

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg
        ref={ref}
        className={progressVariants({ size, variant, track, className })}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        )}
        
        {/* Background track */}
        <circle
          stroke="currentColor"
          strokeWidth={thickness}
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          className="transition-all duration-300"
        />
        
        {/* Progress circle */}
        <circle
          stroke={variant === 'gradient' ? `url(#${gradientId})` : 'currentColor'}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="50"
          cy="50"
          transform="rotate(-90 50 50)"
          className="transition-all duration-700 ease-out"
        />
      </svg>

      {/* Center content */}
      {(showValue || label) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {showValue && (
            <span className={`font-semibold ${
              size === 'sm' ? 'text-sm' :
              size === 'md' ? 'text-base' :
              size === 'lg' ? 'text-lg' :
              'text-xl'
            }`}>
              {Math.round(progress)}%
            </span>
          )}
          {label && (
            <span className={`text-gray-500 ${
              size === 'sm' ? 'text-xs' :
              size === 'md' ? 'text-sm' :
              'text-base'
            }`}>
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;