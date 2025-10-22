import { BaseInput, BaseInputProps } from "@/components/base/BaseInput";
import { FieldValues } from "react-hook-form";

export const FormItemInput = <TFormValues extends FieldValues>(
  props: BaseInputProps<TFormValues>
) => {
  return <BaseInput {...props} />;
};
