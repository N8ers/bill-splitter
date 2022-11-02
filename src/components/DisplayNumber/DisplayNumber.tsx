import React from "react"

// import styles from "./DisplayNumber.module.css"

interface Props {
  label: string
  number: number
}

export const DisplayNumber: React.FC<Props> = ({ number, label }) => {
  return (
    <div>
      {/* This is where we will format the number to have a comma and dollar sign,
      all the stuff nessessary to make it look nice */}
      <h4>
        {label}: ${number}
      </h4>
    </div>
  )
}
