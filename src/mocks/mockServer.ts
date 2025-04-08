import { User } from "@/types/user";
import { http, HttpResponse } from "msw";

const mockURL = "http://localhost:4000/api";

const users: User[] = [
  {
    id: "1",
    username: "Bob",
    email: "Bob@test.com",
    password: "loginBob",
    role: "admin",
  },
  {
    id: "2",
    username: "Emmi",
    email: "Emilia@gmail.com",
    password: "loginEmilia",
    role: "user",
  },
];

// Intercept "Post https://example.com/user" requests
export const restHandlers = [
  http.get(`${mockURL}/dummy`, async ({ request }) => {
    const authHeader = request.headers.get("Authorization");

    return HttpResponse.json({ mockAuth: authHeader });
  }),

  http.post(`${mockURL}/login`, async ({ request }) => {
    const body = (await request.json()) as User;

    const { email, password, role, username } = body;
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user)
      return HttpResponse.json(
        { message: "Invalid Credentials" },
        { status: 401 }
      );

    return HttpResponse.json({
      token: "testToken123456",
      user: { username, email, role },
    });
  }),
];
