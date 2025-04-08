/// <reference types="vitest" />
/// <reference types="vite/client" />
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom", //Use commands without import
    setupFiles: ["./src/tests/setup.ts"],
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"], // ✅ nur Unit/Integration
    exclude: ["e2e", "**/*.spec.ts"], // ❌ Playwright-Dateien raus
  },
});
