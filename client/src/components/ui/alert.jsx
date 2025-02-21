import React from 'react';
import classNames from 'classnames';

const Alert = ({ variant = 'default', className, children, ...props }) => {
  const variants = {
    default: 'bg-blue-50 text-blue-700',
    destructive: 'bg-red-50 text-red-700'
  };

  return (
    <div
      className={classNames(
        'p-4 rounded-md text-sm',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const AlertDescription = ({ className, ...props }) => {
  return (
    <div className={classNames('mt-2', className)} {...props} />
  );
};

export { Alert, AlertDescription };
