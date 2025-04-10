import { render, screen, userEvent, waitFor } from "../../../tests/test-utils";
import Header from "./Header";
import ThemeProvider from "@/context/theme.context";

describe("Render header with toggler:", () => {
  test("applies dark theme initially", async () => {
    render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const btn = await screen.findByRole("button");
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("dark")).toBe(true);
      expect(localStorage.getItem("vite-ui-theme")).toBe("dark");
    });
  });
  test("toggles theme to light", async () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <Header />
      </ThemeProvider>
    );

    const btn = await screen.findByRole("button");
    expect(btn).toBeInTheDocument();
    await userEvent.click(btn);

    await waitFor(() => {
      expect(document.documentElement.classList.contains("light")).toBe(true);
      expect(localStorage.getItem("vite-ui-theme")).toBe("light");
    });
  });
});
