import * as React from "react"
// import Box from "@mui/material/Box"
// import Grid from "@mui/material/Unstable_Grid2"

import styles from "./Card.module.css"

interface Props {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}
