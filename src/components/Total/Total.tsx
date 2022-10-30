import React, { useState } from "react"

import { TextField } from "@mui/material"

// import styles from "./Total.module.css"

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Total: React.FC<Props> = ({ handleChange }) => {
  const [total] = useState("")

  return (
    <div>
      <h3>Total: {total}</h3>
      <TextField
        label="Total Bill"
        variant="standard"
        type="number"
        onChange={handleChange}
      />
    </div>
  )
}
