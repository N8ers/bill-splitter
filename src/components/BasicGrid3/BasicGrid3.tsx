import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import { TextField, Button } from "@mui/material"

import styles from "./BasicGrid3.module.css"

export default function BasicGrid3() {
  const Header = (
    <div className={styles.header}>
      <h1>Bill Splitter</h1>
      <p>Split your expense by income.</p>
    </div>
  )

  const Total = (
    <div className={styles.total}>
      <div>Split Your Bill</div>
      <TextField label="total" variant="standard" />
      <h4>Total: $0</h4>
    </div>
  )

  const ChildGrid = (
    <div className={styles.income}>
      <div className={styles.incomeHeader}>Income 1</div>

      <TextField label="income" variant="standard" />

      <Grid container spacing={2}>
        <Grid xs={6}>Share: $0.00</Grid>
        <Grid xs={6}>Percent: 0.0%</Grid>
      </Grid>
    </div>
  )

  return (
    <div>
      {Header}

      <Box sx={{ flexGrow: 1 }} className={styles.container}>
        <Grid container spacing={2}>
          <Grid xs={4}>{Total}</Grid>
          <Grid xs={4}>{ChildGrid}</Grid>
          <Grid xs={4}>{ChildGrid}</Grid>
        </Grid>

        <br />

        <Button>Expense!</Button>
      </Box>
    </div>
  )
}
