import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders header text", () => {
  render(<App />)
  const headerText = screen.getByText(
    /Type in the input for your message to appear!/i
  )
  expect(headerText).toBeInTheDocument()
})
