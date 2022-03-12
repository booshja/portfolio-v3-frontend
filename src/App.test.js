// dependencies
import React from "react";
import { render } from "@testing-library/react";
// components
import App from "./App";

// Smoke Test
it("renders without breaking", () => {
  render(<App />);
});

// Snapshot Test
it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
