import React from "react"
import { render, screen } from "@testing-library/react"
import { IncomeField } from "./IncomeField"

test("renders header text", () => {
  render(
    <IncomeField
      percentShare={10}
      dollarShare={4}
      personIndex={1}
      handleChange={() => null}
    />
  )
  const LabelText = screen.getByText(/Person 1/i)
  expect(LabelText).toBeInTheDocument()
})
