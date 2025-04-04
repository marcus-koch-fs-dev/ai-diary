import { useState, useEffect } from "react";
import type { FormSchema, FormValues, FormErrors } from "@/types/form";

type UseFormReturn<T extends FormSchema> = {
  values: FormValues<T>;
  errors: FormErrors<T>;
  touchedField: keyof T | null;
  isValid: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (
    cb: (data: FormValues<T>) => void
  ) => (e: React.FormEvent) => void;
};

/**
 * Hook for managing form state, validation and submission
 * using a schema-based configuration.
 *
 * Features:
 * - Stores form values
 * - Tracks a single touched field
 * - Performs validation only when needed
 * - Validates on blur or on form submission
 * - Returns all necessary handlers and state
 *
 * @template T Form schema type
 * @param {T} schema - The validation schema defining field rules and labels
 * @returns {UseFormReturn<T>} Form state and utility functions
 */

export const useForm = <T extends FormSchema>(schema: T): UseFormReturn<T> => {
  const initialValues = Object.keys(schema).reduce((acc, key) => {
    acc[key as keyof T] = "";
    return acc;
  }, {} as FormValues<T>);

  const [values, setValues] = useState<FormValues<T>>(initialValues);
  const [errors, setErrors] = useState<FormErrors<T>>({} as FormErrors<T>);
  const [touchedField, setTouchedField] = useState<keyof T | null>(null);

  useEffect(() => {
    if (!touchedField) return;
    const failedRule = schema[touchedField]?.rules.find(
      (rule) => !rule.test(values[touchedField])
    );
    setErrors((prev) => ({
      ...prev,
      [touchedField]: failedRule ? failedRule.message : "",
    }));
  }, [touchedField]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name as keyof T]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouchedField(e.target.name as keyof T);
  };

  const handleSubmit =
    (cb: (data: FormValues<T>) => void) => (e: React.FormEvent) => {
      e.preventDefault();
      const validationErrors = Object.keys(schema).reduce((acc, key) => {
        const failedRule = schema[key].rules.find(
          (rule) => !rule.test(values[key as keyof T])
        );
        if (failedRule) acc[key as keyof T] = failedRule.message;
        return acc;
      }, {} as FormErrors<T>);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) cb(values);
    };

  const isValid = Object.values(errors).every((err) => err === "");

  return {
    values,
    errors,
    touchedField,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
