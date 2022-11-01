import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Unstable_Grid2"

import { TextField } from "@mui/material"

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

  useEffect(() => {
    handleChange(income)
  }, [income])

  return (
    <div className={styles.card}>
      <div>Person {personIndex}</div>

      <div>income: ${income}</div>

      <Grid container spacing={2}>
        <Grid xs={6}>Share: ${(total * percentShare).toFixed(2)}</Grid>
        <Grid xs={6}>Percent: {(percentShare * 100).toFixed(1)}%</Grid>
      </Grid>

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
