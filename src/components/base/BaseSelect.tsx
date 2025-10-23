"use client";
import { ReactNode, useEffect, useRef } from "react";
import {
    Control,
    FieldPath,
    FieldValues,
    Path,
    RegisterOptions,
    useController,
} from "react-hook-form";

import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { SelectProps } from "@radix-ui/react-select";

export interface OptionSelectInput {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface BaseSelectProps<TFormValues extends FieldValues>
  extends Omit<SelectProps, "name" | "onValueChange" | "value"> {
  name: Path<TFormValues>;
  control: Control<TFormValues>;
  options: OptionSelectInput[];
  label?: string;
  placeholder?: string;
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  variant?: "outlined" | "filled" | "standard";
  suffixIcon?: ReactNode;
  showError?: boolean;
  className?: string;
  handleOnChange?: (data: string | number) => void;
  handleOnSelect?: (data: string | number) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BaseSelect = <TFormValues extends Record<string, any>>({
  name,
  control,
  rules,
  label,
  placeholder = "選択してください...",
  variant = "outlined",
  suffixIcon,
  options,
  showError = true,
  handleOnChange,
  handleOnSelect,
  className,
  ...restProps
}: BaseSelectProps<TFormValues>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({
    name,
    control: control as Control<FieldValues>,
    rules,
  });

  useEffect(() => {
    ref(inputRef.current);
  }, [ref]);

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <Label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}

      <Select
        value={value ? String(value) : ""}
        onValueChange={(val) => {
          onChange(val);
          handleOnChange?.(val);
          handleOnSelect?.(val);
        }}
        onOpenChange={onBlur}
        {...restProps}
      >
        <SelectTrigger
          ref={inputRef as React.RefObject<HTMLButtonElement>}
          className={cn(
            "w-full rounded-none !h-auto border  text-sm py-1 px-2 relative cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0",
            variant === "filled" && "bg-gray-50 border-gray-200",
            variant === "outlined" && "border-gray-200",
            variant === "standard" &&
              "border-0 border-b border-gray-300 rounded-none",
            error && "border-red-500 focus:border-red-500",
            className
          )}
        >
          <SelectValue placeholder={placeholder} />
          {suffixIcon && <span>{suffixIcon}</span>}
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value.toString()}
              disabled={option.disabled}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {showError && error?.message && (
        <p className="text-xs text-red-500 mt-1">{error.message}</p>
      )}
    </div>
  );
};
