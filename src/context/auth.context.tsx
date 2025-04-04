import { User } from "@/types/user";
import { createContext, useContext, useState, ReactNode } from "react";

type AuthPayload = {
  token: string;
  user: User;
};

type AuthContextValue = {
  user: User | null;
  isAuthenticated: boolean;
  authenticate: (data: AuthPayload) => void;
  setUser: (user: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const getInitialUser = (): User | null => {
  try {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
};

/**
 * Provides authentication state and functions throughout the app.
 * Wrap your App with <AuthProvider> to enable useAuth() access.
 */
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(getInitialUser());

  const authenticate = ({ token, user }: AuthPayload) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, authenticate, setUser, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const useIsAdmin = (): boolean => {
  const { user } = useAuth();
  return user?.role === "admin";
};
