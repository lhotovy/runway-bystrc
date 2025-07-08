import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        blue: "bg-blue-5 text-white font-bold text-base rounded-2xl px-6 py-4 cursor-pointer",  
        white: "bg-white text-blue-5 font-bold text-base rounded-2xl px-6 py-4 cursor-pointer",
        yellow: "bg-yellow text-content-blue font-bold text-base rounded-2xl px-6 py-4 cursor-pointer",
        badge: "bg-gray-1 py-[10px] px-[20px] rounded-full text-base font-bold active:text-blue-5 cursor-pointer border border-2",
        default: "text-primary underline-offset-4 hover:underline",
      },
      // size: {
      //   default: "h-8 rounded-md px-3 py-3",
      //   narrow: "h-8 px-1 py-2",
      //   icon: "h-4 w-4",
      // },
    },
    defaultVariants: {
      variant: "default",
      //size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  text?: string;
  type?: "submit" | "button";
  iconDisplay?: boolean;
  customIcon?: React.ReactElement;
  variant?:
    | "default"
    | "blue"  
    | "white"
    | "yellow"
    | "badge";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      type,
      asChild = false,
      text,
      iconDisplay,
      customIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"; 
    let displayText: string;

    switch (variant) {
      case "blue":   
      case "white": 
      case "yellow":
      case "badge":
        displayText = text || "Action";
        break;       
      default:       
        displayText = text || "Default Button";
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {displayText} 
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };