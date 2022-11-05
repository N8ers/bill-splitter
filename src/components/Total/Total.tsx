import React, { useState, useEffect } from "react"

import { TextField } from "@mui/material"

import { DisplayNumber } from "../DisplayNumber/DisplayNumber"

import styles from "./Total.module.css"

interface Props {
  handleChange: (event: number) => void
}

export const Total: React.FC<Props> = ({ handleChange }) => {
  const [total, setTotal] = useState(0)
  const [displayTotal, setDisplayTotal] = useState("")
  const [warning, setWarning] = useState("")

  const handleInputChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setWarning("")
    if (e.key === "Backspace") {
      const totalArray = total.toString().split("")
      totalArray.pop()
      const newTotal = totalArray.join("")

      if (!newTotal.length) {
        setTotal(0)
      } else {
        setTotal(parseInt(newTotal))
      }
    } else if (e.key.match(/^[0-9]+$/)) {
      const totalArray = total.toString().split("")
      if (totalArray.length && totalArray[0] === "0") {
        totalArray.shift()
      }
      totalArray.push(e.key)
      const newTotal = parseInt(totalArray.join(""))

      if (newTotal >= 1000000) {
        setWarning("value must be under 1,000,000")
      } else {
        setTotal(newTotal)
      }
    }
  }

  useEffect(() => {
    const newTotalFormatted = total.toLocaleString("en-US", {})
    setDisplayTotal(newTotalFormatted)
    handleChange(total)
  }, [total])

  return (
    <div>
      <div className={styles.totalHeader}>Bill Total</div>
      <DisplayNumber label="Total" number={total} />
      <div className={styles.inputField}>
        <TextField
          value={displayTotal}
          label="Total Bill"
          variant="standard"
          onKeyDown={handleInputChange}
        />
      </div>
      <div className={styles.warning}>{warning}</div>
    </div>
  )
}
