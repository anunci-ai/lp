"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes } from "react";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "gradient" | "outline" | "ghost";
  children: React.ReactNode;
}

export function GradientButton({
  size = "md",
  variant = "gradient",
  className,
  children,
  ...props
}: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  if (variant === "gradient") {
    return (
      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold text-white cursor-pointer overflow-hidden shimmer-btn",
          sizeClasses[size],
          className
        )}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }

  if (variant === "outline") {
    return (
      <motion.button
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full font-semibold cursor-pointer",
          "border border-border text-foreground/80 hover:text-foreground hover:border-border/80",
          "transition-colors duration-200",
          sizeClasses[size],
          className
        )}
        {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold cursor-pointer",
        "text-muted-foreground hover:text-foreground transition-colors duration-200",
        sizeClasses[size],
        className
      )}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
