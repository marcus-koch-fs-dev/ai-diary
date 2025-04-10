import { AuthProvider } from "@/context/auth.context";
import { render, screen, userEvent, waitFor } from "../../../tests/test-utils";
import { LoginForm } from "./LoginForm";
import { BrowserRouter } from "react-router";
import { Toaster } from "sonner";

describe("Login form test", () => {
  let inputEmail: HTMLInputElement;
  let inputPW: HTMLInputElement;
  let submit: HTMLButtonElement;

  beforeEach(async () => {
    await render(
      <AuthProvider>
        <BrowserRouter>
          <LoginForm />
          <Toaster richColors position="top-right" />
        </BrowserRouter>
      </AuthProvider>
    );

    inputEmail = screen.getByLabelText(/email/i);
    inputPW = screen.getByLabelText(/password/i);
    submit = screen.getByRole("button", { name: /login/i });
  });

  test("It has correctly rendered", () => {
    expect(inputEmail).toBeInTheDocument();
    expect(inputPW).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });

  test("Accepts correct email and password input", async () => {
    await userEvent.type(inputEmail, "Emilia@gmail.com");
    await userEvent.type(inputPW, "loginEmilia");
    await userEvent.click(submit);

    const toast = await screen.findByText(/welcome emmi/i);
    expect(toast).toBeInTheDocument();
  });

  test("Shows hint when email format is invalid", async () => {
    const invalidEmails = ["Emiliagmail.com", "Emilia@gmailcom"];

    for (const email of invalidEmails) {
      await userEvent.clear(inputEmail);
      await userEvent.clear(inputPW);
      await userEvent.type(inputEmail, email);
      await userEvent.type(inputPW, "somepass");
      await userEvent.click(submit);

      await waitFor(() => {
        expect(screen.getByText(/ungültige e-mail/i)).toBeInTheDocument();
      });
    }
  });

  test("Shows hint when authentication fails", async () => {
    await userEvent.clear(inputEmail);
    await userEvent.clear(inputPW);
    await userEvent.type(inputEmail, "Emilia@gmail.com");
    await userEvent.type(inputPW, "wrongPW");
    await userEvent.click(submit);

    const toast = await screen.findByText(/login failed/i);
    expect(toast).toBeInTheDocument();
  });
});
