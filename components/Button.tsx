import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: `
      bg-gradient-to-b from-[#00DF82] to-[#00b56a] 
      text-[#030F0F] 
      shadow-[0_0_20px_rgba(0,223,130,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] 
      hover:shadow-[0_0_25px_rgba(0,223,130,0.6),inset_0_1px_0_rgba(255,255,255,0.5)] 
      hover:-translate-y-0.5 
      active:translate-y-0 
      active:scale-95
      border-b-2 border-[#009e5c]
    `,
    secondary: "bg-white text-primary hover:bg-gray-50 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 shadow-md",
    outline: "border-2 border-white/20 text-white hover:bg-white/10 active:scale-95 backdrop-blur-sm",
    ghost: "text-white/80 hover:text-white hover:bg-white/10"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
      )}
    </motion.button>
  );
};

export default Button;