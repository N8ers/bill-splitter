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
  const [income, setIncome] = useState("")
  const [share, setShare] = useState("")

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
