import React, { useState, useEffect } from "react"

import { TextField, Divider } from "@mui/material"

import { IncomeField } from "./components/IncomeField/IncomeField"

import "./App.css"

function App() {
  const [total, setTotal] = useState(0)

  // maybe make it a dynamic number of participants?
  // const participants = useState([])

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
      <h4>Split your bill</h4>

      <div>
        <h3>Total: {total}</h3>
        <TextField
          label="Total Bill"
          variant="standard"
          type="number"
          onChange={(e) => setTotal(parseInt(e.target.value))}
        />
      </div>

      <Divider />

      <IncomeField
        total={total}
        income={incomeOne}
        percentShare={incomeOnePercentShare}
        personIndex={1}
        handleChange={(event) => setIncomeOne(parseInt(event.target.value))}
      />

      <IncomeField
        total={total}
        income={incomeTwo}
        percentShare={incomeTwoPercentShare}
        personIndex={2}
        handleChange={(event) => setIncomeTwo(parseInt(event.target.value))}
      />
    </div>
  )
}

export default App
