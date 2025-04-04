export type ValidationRule = {
  test: (value: string) => boolean;
  message: string;
};

export type FieldJudgement = {
  label: string;
  rules: ValidationRule[];
};

export type FormSchema = Record<string, FieldJudgement>;

export type FormValues<T extends FormSchema> = Record<keyof T, string>;

export type FormErrors<T extends FormSchema> = Record<keyof T, string>;
