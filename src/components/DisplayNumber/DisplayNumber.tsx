import React from "react"

// import styles from "./DisplayNumber.module.css"

interface Props {
  label: string
  number: number
}

export const DisplayNumber: React.FC<Props> = ({ number, label }) => {
  const value = number ? number : 0

  return (
    <div>
      <h4>
        {label}: $
        {value.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h4>
    </div>
  )
}
