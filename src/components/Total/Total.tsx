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

  // CHANGE THIS NAME AND FIX THE e: any warning!
  const handleFormattedInput = (e: any) => {
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
      const newTotal = totalArray.join("")
      setTotal(parseInt(newTotal))
    }
  }

  useEffect(() => {
    const newTotalFormatted = total.toLocaleString("en-US", {})
    setDisplayTotal(newTotalFormatted)
    handleChange(total)
  }, [total])

  return (
    <div>
      <div className={styles.totalHeader}>Split Your Bill</div>
      <DisplayNumber label="Total" number={total} />
      <div className={styles.inputField}>
        <TextField
          value={displayTotal}
          label="Total Bill"
          variant="standard"
          onKeyDown={handleFormattedInput}
        />
      </div>
    </div>
  )
}
