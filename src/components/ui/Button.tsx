import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isFullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  isFullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-[1.02] active:scale-[0.98]';
  
  const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-sage text-white hover:bg-sage-dark dark:bg-sage-dark dark:hover:bg-sage active:bg-sage/90',
    secondary: 'bg-lavender text-white hover:bg-lavender-dark dark:bg-lavender-dark dark:hover:bg-lavender active:bg-lavender/90',
    outline: 'border-2 border-sage text-sage hover:bg-sage/10 dark:border-sage-dark dark:text-sage-dark dark:hover:bg-sage-dark/10 active:bg-sage/20',
    text: 'text-sage hover:bg-sage/10 dark:text-sage-dark dark:hover:bg-sage-dark/10 active:bg-sage/20',
  };
  
  const sizeStyles: Record<ButtonSize, string> = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-5 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const widthStyle = isFullWidth ? 'w-full' : '';
  
  const loadingStyle = isLoading ? 'relative text-transparent transition-none hover:text-transparent' : '';
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${loadingStyle} ${className}`;
  
  return (
    <button 
      className={combinedClassName} 
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;