import { AxiosResponse, AxiosError } from "axios";
import { User } from "@/types/user";
import { postLogin } from "./auth.api";
import api from "./config";

type LoginData = {
  token: string;
  user: Pick<User, "email" | "username" | "role">;
};

type LoginError = {
  message: string;
};

type LoginResponseSuccess = AxiosResponse<LoginData>;
type LoginResponseError = AxiosError<LoginError>;

describe("Auth API", () => {
  test("Test of API Interceptor", async () => {
    localStorage.setItem("token", "myToken123");

    try {
      const { data } = await api.get("/dummy");
      expect(data.mockAuth).toBe("Bearer myToken123");
    } catch {}
  });

  test("Login correct user", async () => {
    const res = await postLogin("Bob@test.com", "loginBob");
    const { data, status }: LoginResponseSuccess = res;

    localStorage.setItem("testToken", data.token);

    expect(localStorage.getItem("testToken")).toBe("testToken123456");
    expect(data.user.email).toBe("Bob@test.com");
    expect(status).toBe(200);
  });

  test("Login with wrong credentials", async () => {
    try {
      await postLogin("fail@mail.com", "wrong");
    } catch (error) {
      const err = error as LoginResponseError;

      expect(err?.response?.status).toBe(401);
      expect(err?.response?.data?.message).toBe("Invalid Credentials");
    }
  });
});
