import { BaseSelect, BaseSelectProps } from "@/components/base/BaseSelect";
import { FieldValues } from "react-hook-form";

export const FormItemSelect = <TFormValues extends FieldValues>(
  props: BaseSelectProps<TFormValues>
) => {
  return <BaseSelect {...props} />;
};
