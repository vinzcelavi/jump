import type { FieldError, UseFormRegister } from "react-hook-form";
import { type ZodType, z } from "zod";

export const FORM_FIELDS = {
  TITLE: 'title',
  EMAIL: 'email',
  DESCRIPTION: 'description',
} as const;

export type Pokemon = {
  name: string;
  image: string;
  types: string[];
};

export type FormData = {
  [FORM_FIELDS.TITLE]: string;
  [FORM_FIELDS.EMAIL]: string;
  [FORM_FIELDS.DESCRIPTION]: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames = typeof FORM_FIELDS[keyof typeof FORM_FIELDS];

export const UserSchema: ZodType<FormData> = z
  .object({
    [FORM_FIELDS.TITLE]: z.string().min(1, { message: "Title is required" }),
    [FORM_FIELDS.EMAIL]: z.string().email({ message: "Invalid email address" }),
    [FORM_FIELDS.DESCRIPTION]: z.string().min(1, { message: "Description is required" }),
  });
