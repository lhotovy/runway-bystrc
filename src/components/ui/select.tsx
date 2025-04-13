import React from "react";
import Select from "react-select";
import { cn } from "@/lib/utils";

export const DropdownSelect = React.forwardRef((props: any, ref: any) => {
  const currentOption = props?.options?.find((option: any) => option.key === props?.value);

  const customStyles = {
    ...props?.styles,
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "hsl(var(--color-base-100))",
      minWidth: props?.minWidth,
      textTransform: "capitalize",
      fontSize: "0.875rem",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isFocused
      ? "hsl(var(--color-accent-content))"
      : "hsl(var(--color-base-content))",
      paddingLeft: 16,
      paddingRight: 16,
      fontSize: "0.875rem",
      cursor: "pointer",
      textTransform: "capitalize",
      backgroundColor: state.isFocused ? "hsl(var(--color-accent))" : "hsl(var(--color-base-100))",
      "&:hover": {
        backgroundColor: "hsl(var(--color-accent))",
        color: "hsl(var(--color-accent-content))",
      },
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "hsl(var(--color-base-100))",
      minHeight: "32px",
      //minWidth: "150px",
      fontSize: "0.875rem",
      height: "32px",
      cursor: "pointer",
      boxShadow: null,
      textTransform: "capitalize",
      border: "1px solid hsl(var(--color-gray-9))",
      borderColor: "black",
      "&:hover": {
        border: state.isFocused ? `1px solid hsl(var(--color-accent))` : "1px solid rgb(29, 30, 58)",
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      height: "32px",
      padding: "0 6px",
      maxWidth: "auto",
      minWidth: "auto",
    }),
    input: (provided: any) => ({
      ...provided,
      margin: "0px",
      color: "hsl(var(--color-accent))",
      minWidth: "10rem",
      maxWidth: "10rem",
      textTransform: "capitalize",
      fontSize: "12px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided: any) => ({
      ...provided,
      height: "30px",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontSize: "0.875rem",
      color: "hsl(var(--color-accent))",
      textTransform: "capitalize",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "hsl(var(--color-accent))",
      fontSize: "14px",
    }),
  };

  return (
    <div className={cn("flex-col", props.isHidden ? "hidden" : "flex")} 
      >
      {props?.text && <label htmlFor={props.id} className="text-base-300 font-normal mb-1">{props.text}</label>}
      
      <Select
        {...props}    
        styles={customStyles}
        value={{label: currentOption?.label}}
        onChange={props?.onChange}
        innerRef={ref}
      />
      {props?.errorMessage && (
        <label          
          className="text-error text-xs opacity-100 mt-1">
          {props.errorMessage}
        </label>
      )}
    </div>
  );
});

DropdownSelect.displayName = "DropdownSelect";

export default DropdownSelect;