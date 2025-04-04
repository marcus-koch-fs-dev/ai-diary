export const loginSchema = {
  email: {
    label: "E-Mail",
    rules: [
      { test: (v) => v.length > 0, message: "Pflichtfeld" },
      { test: (v) => v.includes("@"), message: "Ungültige E-Mail" },
    ],
  },
  password: {
    label: "Passwort",
    rules: [{ test: (v) => v.length >= 3, message: "Mind. 3 Zeichen" }],
  },
};
