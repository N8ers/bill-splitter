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
  // const [income, setIncome] = useState(0)
  // const [displayIncome, setDisplayIncome] = useState("")

  const [income, setIncome] = useState("")
  const [share, setShare] = useState("")

  const [tIncome, setTIncome] = useState(0)
  const [formattedInput, setFormattedInput] = useState("0")
  const handleFormattedInput = (e: any) => {
    if (e.key === "Backspace") {
      // remove last character
      const incomeArray = tIncome.toString().split("")
      incomeArray.pop()
      const newIncome = incomeArray.join("")

      if (!newIncome.length) {
        setTIncome(0)
        const newIncomeFormatted = tIncome.toLocaleString("en-US", {})
        setFormattedInput(newIncomeFormatted)
      } else {
        setTIncome(parseInt(newIncome))
        const newIncomeFormatted = tIncome.toLocaleString("en-US", {})
        setFormattedInput(newIncomeFormatted)
      }
    } else if (e.key.match(/^[0-9]+$/)) {
      const incomeArray = tIncome.toString().split("")
      incomeArray.push(e.key)
      const newIncome = incomeArray.join("")
      setTIncome(parseInt(newIncome))
      const newIncomeFormatted = tIncome.toLocaleString("en-US", {})
      setFormattedInput(newIncomeFormatted)
    } else {
      // not a num - do nothing
      console.log("NOT a NUM :(")
    }
  }

  useEffect(() => {
    handleChange(income)
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

      <DisplayNumber label="Income" number={parseInt(income)} />

      <div className={styles.shareAndPercent}>
        <Grid container spacing={2}>
          <Grid xs={6}>Share: ${share}</Grid>
          <Grid xs={6}>Percent: {(percentShare * 100).toFixed(1)}%</Grid>
        </Grid>
      </div>

      <div>
        <TextField
          label="income"
          value={formattedInput}
          variant="standard"
          onKeyDown={handleFormattedInput}
        />
      </div>

      <div className={styles.inputField}>
        <TextField
          label="income"
          variant="standard"
          onChange={(event) => setIncome(event.target.value)}
        />
      </div>
    </div>
  )
}
