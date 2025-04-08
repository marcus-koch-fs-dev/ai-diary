import { User } from "@/types/user";
import api from "./config";

export const postLogin = (email: string, password: string) =>
  api.post("/login", { email, password });

export const postRegister = (data: User) => api.post("/create", data);
