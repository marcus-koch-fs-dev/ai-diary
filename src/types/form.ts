// Schema for Forms Types
type Rule = {
  test: (value: string) => boolean;
  message: string;
};

type Rules = Rule[];

type SchemaRule = {
  label: string;
  rules: Rules;
};

export type Schema<T extends string = string> = Record<T, SchemaRule>;

// Form Types
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
