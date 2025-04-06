// e2e/login.spec.ts
import { test, expect } from "@playwright/test";

test("Login-Seite lädt korrekt", async ({ page }) => {
  await page.goto("http://localhost:5173/login");
  await expect(page.getByRole("button", { name: /login/i })).toBeVisible();
});
