import React from "react"

interface Props {
  label: string
  number: number
}

export const DisplayNumber: React.FC<Props> = ({ number, label }) => {
  const value = number ? number : 0

  return (
    <div>
      <h4>
        {label}: ${value.toLocaleString("en-US", {})}
      </h4>
    </div>
  )
}
