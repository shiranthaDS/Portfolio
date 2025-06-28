import React from 'react';

const badgeVariants = {
  default: 'bg-gray-900 text-white hover:bg-gray-800',
  secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'text-gray-900 border border-gray-300 bg-white hover:bg-gray-50',
};

const Badge = React.forwardRef(({ 
  className = '', 
  variant = 'default', 
  children, 
  ...props 
}, ref) => {
  const variantClasses = badgeVariants[variant] || badgeVariants.default;
  
  return (
    <div
      ref={ref}
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
Badge.displayName = 'Badge';

export { Badge };
