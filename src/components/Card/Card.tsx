import * as React from "react"
import Box from "@mui/material/Box"

import styles from "./Card.module.css"

interface Props {
  children: React.ReactNode
}

export const Card: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.container}>
      <div>{children}</div>
    </Box>
  )
}
