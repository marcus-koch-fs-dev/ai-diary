import "@testing-library/jest-dom";
import { setupServer } from "msw/node";
import { restHandlers } from "../mocks/mockServer";

export const server = setupServer(...restHandlers);

// Start the mock server before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
  localStorage.clear();
  console.log("Mock server runs");
});

// Close the mock server after all tests
afterAll(() => server.close());

// Reset the server state and clean up after each test
afterEach(() => {
  server.resetHandlers();
  document.body.innerHTML = "";
});
