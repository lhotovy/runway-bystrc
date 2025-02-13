"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        navigate: "text-white border border-solid border-2 text-xl rounded-xl w-content tracking-wide gap-x-6 bg-slate-900",          
        default: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 rounded-md px-4 py-5",
        narrow: "h-8 px-1 py-2",
        icon: "h-4 w-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;
  iconDisplay?: boolean;
  customIcon?: React.ReactElement;
  variant?:
    | "default"
    | "navigate"   
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      text,
      iconDisplay,
      customIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    let icon: React.ReactElement | null;
    let displayText: string;

    switch (variant) {     
      case "navigate":
        icon = customIcon || <ArrowDownIcon className="h-5 w-5 animate-bounce" />;
        displayText = text || "Navigate";
        break;   
      default:
        //icon = <FontIcon className="h-5 w-5 mr-2" iconName={customIcon || undefined}/>
        displayText = text || "Default Button";
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {displayText}
        {/* @ts-ignore */}
        {iconDisplay !== false && icon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };