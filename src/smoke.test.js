import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import { algorithms } from "./content/catalog";

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    text: async () => "// mock snippet",
  });
});

afterEach(() => {
  jest.clearAllMocks();
});

test("home renders algorithm cards", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );

  expect(screen.getByText("My Algorithms")).toBeInTheDocument();
  for (const algorithm of algorithms) {
    expect(screen.getByText(`${algorithm.number}. ${algorithm.name}`)).toBeInTheDocument();
  }
});

test("every algorithm route renders page shell", async () => {
  for (const algorithm of algorithms) {
    const { unmount } = render(
      <MemoryRouter initialEntries={[`/algorithm/${algorithm.route}/${algorithm.id}`]}>
        <App />
      </MemoryRouter>,
    );

    expect(await screen.findByText("Question")).toBeInTheDocument();
    expect(screen.getByText("Code")).toBeInTheDocument();
    unmount();
  }
});
