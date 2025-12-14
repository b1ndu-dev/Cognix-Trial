"use client";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "text-muted-foreground animate-spin",
  {
    variants: {
      size: {
        default: "h-4 w-4",
        sm: "h-2 w-2",
        lg: "h-6 w-6",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {}

export const Spinner = ({
  size,
}: SpinnerProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={cn(spinnerVariants({ size }))}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
