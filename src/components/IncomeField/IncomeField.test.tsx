import React from "react"
import { render, screen } from "@testing-library/react"
import { IncomeField } from "./IncomeField"

test("renders header text", () => {
  render(
    <IncomeField
      total={100}
      percentShare={10}
      personIndex={1}
      income={40000}
      handleChange={() => null}
    />
  )
  const LabelText = screen.getByText(/Person 1/i)
  expect(LabelText).toBeInTheDocument()
})
