import { http, HttpResponse } from "msw";

// Intercept "Post https://example.com/user" requests
export const restHandlers = [
  http.post("https://example.com/products", () => {
    return HttpResponse.json({});
  }),
];
