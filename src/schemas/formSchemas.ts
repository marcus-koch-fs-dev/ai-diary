import { Schema } from "@/types/form";

type FieldNames = "email" | "password";

export const loginSchema: Schema<FieldNames> = {
  email: {
    label: "E-Mail",
    rules: [
      { test: (v) => v.length > 0, message: "Pflichtfeld" },
      {
        test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
        message: "Ungültige E-Mail",
      },
    ],
  },
  password: {
    label: "Passwort",
    rules: [{ test: (v) => v.length >= 3, message: "Mind. 6 Zeichen" }],
  },
};
