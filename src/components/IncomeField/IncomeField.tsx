import React, { useState, useEffect } from "react"

import Grid from "@mui/material/Unstable_Grid2"
import { TextField } from "@mui/material"

import { DisplayNumber } from "../DisplayNumber/DisplayNumber"

import styles from "./IncomeField.module.css"

interface Props {
  total: number
  percentShare: number
  personIndex: number
  handleChange: (event: string) => void
}

export const IncomeField: React.FC<Props> = ({
  total,
  percentShare,
  personIndex,
  handleChange,
}) => {
  const [income, setIncome] = useState(0)
  const [displayIncome, setDisplayIncome] = useState("")
  const [warning, setWarning] = useState("")
  const [share, setShare] = useState("")

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
        setWarning("no value over 1,000,000 allowed")
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

  useEffect(() => {
    const newShareValue = (total * percentShare).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    setShare(newShareValue)
  }, [total, percentShare])

  return (
    <div>
      <div className={styles.incomeHeader}>Person {personIndex}</div>

      <DisplayNumber label="Income" number={income} />

      <div className={styles.shareAndPercent}>
        <Grid container spacing={2}>
          <Grid xs={6}>Share: ${share}</Grid>
          <Grid xs={6}>Percent: {(percentShare * 100).toFixed(1)}%</Grid>
        </Grid>
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
