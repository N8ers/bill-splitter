import React, { useState, useEffect } from "react"

import Grid from "@mui/material/Unstable_Grid2"
import { TextField } from "@mui/material"

import { DisplayNumber } from "../DisplayNumber/DisplayNumber"

import styles from "./IncomeField.module.css"

interface Props {
  percentShare: number
  dollarShare: number
  personIndex: number
  handleChange: (event: string) => void
}

export const IncomeField: React.FC<Props> = ({
  percentShare,
  dollarShare,
  personIndex,
  handleChange,
}) => {
  const [income, setIncome] = useState(0)
  const [displayIncome, setDisplayIncome] = useState("")
  const [warning, setWarning] = useState("")
  // const [share, setShare] = useState("")

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setWarning("")
    if (e.key === "Backspace") {
      const incomeArray = income.toString().split("")
      incomeArray.pop()
      const newIncome = incomeArray.join("")

      if (!newIncome.length) {
        setIncome(0)
      } else {
        setIncome(parseInt(newIncome))
      }
    } else if (e.key.match(/^[0-9]+$/)) {
      const incomeArray = income.toString().split("")
      if (incomeArray.length && incomeArray[0] === "0") {
        incomeArray.shift()
      }

      incomeArray.push(e.key)
      const newIncome = parseInt(incomeArray.join(""))

      if (newIncome >= 1000000) {
        setWarning("value must be under 1,000,000")
      } else {
        setIncome(newIncome)
      }
    }
  }

  useEffect(() => {
    const newIncomeFormatted = income.toLocaleString("en-US", {})
    setDisplayIncome(newIncomeFormatted)
    handleChange(income.toString())
  }, [income])

  return (
    <div>
      <div className={styles.incomeHeader}>Person {personIndex}</div>

      <DisplayNumber label="Share" number={dollarShare} />

      <div className={styles.shareAndPercent}>
        Percent: {(percentShare * 100).toFixed(1)}%
      </div>

      <div className={styles.inputField}>
        <TextField
          label="income"
          value={displayIncome}
          variant="standard"
          onKeyDown={handleInputChange}
        />
      </div>
      <div className={styles.warning}>{warning}</div>
    </div>
  )
}
