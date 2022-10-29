import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import { TextField, Button } from "@mui/material"

import styles from "./BasicGrid2.module.css"

export default function BasicGrid2() {
  const Total = (
    <div className={styles.total}>
      <div>Split Your Bill</div>
      <h4>Total: $0</h4>
      <TextField label="total" variant="standard" />
    </div>
  )

  const ChildGrid = (
    <div className={styles.income}>
      <div>Income 1</div>

      <Grid container spacing={2}>
        <Grid xs={6}>Share: $0.00</Grid>
        <Grid xs={6}>Percent: 0.0%</Grid>
      </Grid>

      <TextField label="income" variant="standard" />
    </div>
  )

  return (
    <div>
      <Box sx={{ flexGrow: 1 }} className={styles.container}>
        <Grid xs={4}>{Total}</Grid>
        <br />
        <Grid container spacing={2}>
          <Grid xs={6}>{ChildGrid}</Grid>
          <Grid xs={6}>{ChildGrid}</Grid>
        </Grid>

        <br />
        <Button>Expense!</Button>
      </Box>
    </div>
  )
}
