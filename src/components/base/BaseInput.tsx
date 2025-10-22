"use client";

import { Input } from "@/components/ui/input";
import { ReactNode, useEffect, useRef } from "react";
import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  RegisterOptions,
  useController,
} from "react-hook-form";

export interface BaseInputProps<TFormValues extends FieldValues>
  extends Omit<React.ComponentProps<"input">, "name"> {
  name: Path<TFormValues>;
  rules?: Omit<
    RegisterOptions<FieldValues, FieldPath<FieldValues>>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
  control: Control<TFormValues>;
  height?: string;
  className?: string;
  suffixIcon?: ReactNode;
}

export const BaseInput = <TFormValues extends FieldValues>(
  props: BaseInputProps<TFormValues>
) => {
  const {
    name,
    control,
    rules,
    children,
    className,
    suffixIcon,
    ...restProps
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const {
    field: { onBlur, onChange, ref, value, name: fieldName },
    fieldState: { error },
  } = useController({
    name,
    control: control as Control<FieldValues>,
    rules,
  });

  useEffect(() => {
    ref(inputRef.current);
  }, [ref, value]);

  return (
    <div className="relative w-full">
      <Input
        onBlur={() => {
          onBlur();
        }}
        onChange={onChange}
        value={value}
        name={fieldName}
        ref={inputRef}
        className={`rounded-none bg-white h-auto focus-visible:ring-0 focus-visible:ring-offset-0 ${
          className || ""
        }`}
        {...restProps}
      >
        {children}
      </Input>
      {suffixIcon && <span>{suffixIcon}</span>}
    </div>
  );
};
