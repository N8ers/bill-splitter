import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import { TextField, Button } from "@mui/material"

import styles from "./BasicGrid.module.css"

export default function BasicGrid() {
  const Header = (
    <div className={styles.header}>
      <h1>Bill Splitter</h1>
      <p>Split your expense by income.</p>
    </div>
  )

  const Total = (
    <div className={styles.total}>
      <div>Split Your Bill</div>
      <h4>Total: $0</h4>
      <TextField label="total" variant="standard" />
    </div>
  )

  const ChildGrid = (
    <Grid container spacing={0} className={styles.income}>
      <Grid xs={2}>
        <div>Income 1</div>
      </Grid>
      <Grid xs={4}>
        <div>Share: $0.00</div>
        <div>Percent: 0.0%</div>
      </Grid>
      <Grid xs={4}>
        <TextField label="income" variant="standard" />
      </Grid>
      <Grid xs={2}>
        <Button>Expense!</Button>
      </Grid>
    </Grid>
  )

  return (
    <div>
      {Header}

      <Box sx={{ flexGrow: 1 }} className={styles.container}>
        <Grid container spacing={2}>
          <Grid xs={4}>{Total}</Grid>

          <Grid xs={8}>
            {ChildGrid}
            {ChildGrid}
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}
