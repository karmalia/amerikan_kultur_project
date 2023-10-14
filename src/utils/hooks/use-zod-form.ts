import { zodResolver } from "@hookform/resolvers/zod";
import type { FieldValues, UseFormProps } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { TypeOf, ZodSchema } from "zod";

interface UseZodFormProps<T extends ZodSchema<FieldValues>>
  extends UseFormProps<TypeOf<T>> {
  schema?: T;
}

const useZodForm = <T extends ZodSchema<FieldValues>>({
  schema,
  ...formConfig
}: UseZodFormProps<T>) => {
  return useForm({
    ...formConfig,
    resolver: schema && zodResolver(schema),
  });
};

export default useZodForm;
