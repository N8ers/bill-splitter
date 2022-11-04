import React from "react"

import { TextField } from "@mui/material"

import { DisplayNumber } from "../DisplayNumber/DisplayNumber"

import styles from "./Total.module.css"

interface Props {
  total: number
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Total: React.FC<Props> = ({ total, handleChange }) => {
  return (
    <div>
      <div className={styles.totalHeader}>Split Your Bill</div>
      <DisplayNumber label="Total" number={total} />
      <div className={styles.inputField}>
        <TextField
          label="Total Bill"
          variant="standard"
          type="number"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
