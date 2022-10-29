import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2"
import { TextField, Button } from "@mui/material"

import styles from "./BasicGrid3.module.css"

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
      <div className={styles.incomeHeader}>Income 1</div>

      <Grid container spacing={2}>
        <Grid xs={6}>Share: $0.00</Grid>
        <Grid xs={6}>Percent: 0.0%</Grid>
      </Grid>

      <TextField label="income" variant="standard" />
    </div>

    // <Grid container spacing={0} className={styles.income}>
    //   <Grid xs={3}>
    //     <div>Income 1</div>
    //   </Grid>
    //   <Grid xs={1}>{/* this is a dead cell */}</Grid>
    //   <Grid xs={8}>
    //     <div>Share: $0.00</div>
    //     <div>Percent: 0.0%</div>
    //   </Grid>
    //   <Grid xs={6}>
    //     <TextField label="income" variant="standard" />
    //   </Grid>
    //   <Grid xs={6}>
    //     <Button>Expense!</Button>
    //   </Grid>
    // </Grid>
  )

  return (
    <div>
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
