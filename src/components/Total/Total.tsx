import React from "react"

import { TextField } from "@mui/material"

import styles from "./Total.module.css"

interface Props {
  total: number
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Total: React.FC<Props> = ({ total, handleChange }) => {
  return (
    <div>
      <div className={styles.totalHeader}>Split Your Bill</div>
      <h4>Total: ${total}</h4>
      <TextField
        label="Total Bill"
        variant="standard"
        type="number"
        onChange={handleChange}
      />
    </div>
  )
}
