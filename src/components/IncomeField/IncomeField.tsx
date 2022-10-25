import React from "react"

import { TextField } from "@mui/material"

import styles from "./IncomeField.module.css"

interface Props {
  total: number
  income: number
  percentShare: number
  personIndex: number
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const IncomeField: React.FC<Props> = ({
  total,
  income,
  percentShare,
  personIndex,
  handleChange,
}) => {
  return (
    <div className={styles.card}>
      <h3>Person {personIndex}</h3>
      <div>total: {total}</div>
      <TextField
        label="income"
        variant="standard"
        type="number"
        value={income}
        onChange={handleChange}
      />
      <div>Share: ${(total * percentShare).toFixed(2)}</div>
      <div>Percent of Total: {(percentShare * 100).toFixed(1)}%</div>
    </div>
  )
}
