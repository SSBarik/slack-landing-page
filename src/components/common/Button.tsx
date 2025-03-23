"use client";

import type React from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  href,
  className = "",
  onClick,
}) => {
  const baseClasses =
    "inline-flex justify-center items-center px-6 py-3 rounded font-medium text-sm";

  const variantClasses = {
    primary: "bg-[#611f69] text-white hover:bg-[#4a1751]",
    outline: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
