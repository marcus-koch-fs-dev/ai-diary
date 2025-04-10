import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Label } from "@/components/atoms/label";
import { useNavigate } from "react-router";
import { postLogin } from "@/apis/auth.api";
import { useForm } from "@/hooks/useForm";
import { loginSchema } from "@/schemas/formSchemas";
import { useAuth } from "@/context/auth.context";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const LoginForm = ({
  className,
  ...props
}: React.ComponentProps<"form">) => {
  const { values, errors, handleChange, handleBlur, handleSubmit } =
    useForm(loginSchema);
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (user: typeof values) => {
    try {
      const { data } = await postLogin(user.email, user.password);
      authenticate(data);
      toast.success(`Welcome ${data.user.username}`);
      navigate("/dashboard");
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;

      if (error.response?.status === 401) {
        toast.error("Login failed");
        return;
      }
      throw new Error("Manual throw: invalid credentials (intercepted)");
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>
        <Button type="submit" className="w-full dark:text-stone-900 ">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
};
