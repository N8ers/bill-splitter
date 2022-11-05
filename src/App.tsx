import React, { useState, useEffect } from "react"

import { Divider, Grid } from "@mui/material"

import { IncomeField } from "./components/IncomeField/IncomeField"
import { Card } from "./components/Card/Card"
import { Total } from "./components/Total/Total"
import Header from "./components/Header/Header"

import "./App.css"

function App() {
  const [total, setTotal] = useState(0)

  const [incomeOne, setIncomeOne] = useState(0)
  const [incomeTwo, setIncomeTwo] = useState(0)

  const [incomeOnePercentShare, setIncomeOnePercentShare] = useState(0)
  const [incomeTwoPercentShare, setIncomeTwoPercentShare] = useState(0)

  useEffect(() => {
    const totalIncome = incomeOne + incomeTwo
    if (totalIncome && total) {
      setIncomeOnePercentShare(incomeOne / totalIncome)
      setIncomeTwoPercentShare(incomeTwo / totalIncome)
    } else {
      setIncomeOnePercentShare(0)
      setIncomeTwoPercentShare(0)
    }
  }, [incomeOne, incomeTwo])

  return (
    <div className="App">
      <Header />

      <Divider />

      <h4>Split your bill</h4>

      <div className="container">
        <Grid container spacing={2}>
          <Grid item={true} xs={4}>
            <Card>
              <Total handleChange={(newTotal) => setTotal(newTotal)} />
            </Card>
          </Grid>

          <Grid item={true} xs={4}>
            <Card>
              <IncomeField
                total={total}
                percentShare={incomeOnePercentShare}
                personIndex={1}
                handleChange={(income) => setIncomeOne(parseInt(income))}
              />
            </Card>
          </Grid>

          <Grid item={true} xs={4}>
            <Card>
              <IncomeField
                total={total}
                percentShare={incomeTwoPercentShare}
                personIndex={2}
                handleChange={(income) => setIncomeTwo(parseInt(income))}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default App
