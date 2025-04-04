import { User } from "@/types/user";
import api from "./config";

export const postLogin = (username: string, password: string) =>
  api.post("/login", { username, password });

export const postRegister = (data: User) => api.post("/create", data);
