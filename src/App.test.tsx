import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders header text", () => {
  render(<App />)
  const headerText = screen.getByText(/Bill Splitter/i)
  expect(headerText).toBeInTheDocument()
})
