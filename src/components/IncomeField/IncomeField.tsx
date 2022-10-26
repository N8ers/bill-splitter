import React, { useState, useEffect } from "react"

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
      <h3>Person {personIndex}</h3>
      <div>income: ${income}</div>
      <div>total: {total}</div>
      <TextField
        label="income"
        variant="standard"
        onChange={(event) => setIncome(event.target.value)}
      />
      <div>Share: ${(total * percentShare).toFixed(2)}</div>
      <div>Percent of Total: {(percentShare * 100).toFixed(1)}%</div>
    </div>
  )
}
