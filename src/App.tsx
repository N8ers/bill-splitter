import React, { useState, useEffect } from "react"

import { TextField, Divider } from "@mui/material"

import "./App.css"

function App() {
  const [total, setTotal] = useState("")

  const [incomeOne, setIncomeOne] = useState("")
  const [incomeTwo, setIncomeTwo] = useState("")

  const [incomePercentOne, setIncomePercentOne] = useState(0)
  const [incomePercentTwo, setIncomePercentTwo] = useState(0)

  useEffect(() => {
    const totalIncome = Number(incomeOne) + Number(incomeTwo)
    const personOnePercent = parseInt(incomeOne) / Number(totalIncome)
    const personTwoPercent = 1 - personOnePercent

    setIncomePercentOne(personOnePercent)
    setIncomePercentTwo(personTwoPercent)
  }, [total, incomeOne, incomeTwo])

  return (
    <div className="App">
      <h4>Split your bill</h4>

      <div>
        <h3>Total: {total}</h3>
        <TextField
          label="Total Bill"
          variant="standard"
          onChange={(e) => setTotal(e.target.value)}
        />
      </div>

      <Divider />

      <div>
        <h3>Person 1 Income: {incomeOne}</h3>
        <TextField
          label="Person 1 Income"
          variant="standard"
          onChange={(e) => setIncomeOne(e.target.value)}
        />
        <div>
          <div>Percent of income: {(incomePercentOne * 100).toFixed(1)}%</div>
          <div>
            Total to contribute: $
            {(Number(total) * incomePercentOne).toFixed(2)}
          </div>
        </div>
      </div>

      <Divider />

      <div>
        <h3>Person 2 Income: {incomeTwo}</h3>
        <TextField
          label="Person 2 Income"
          variant="standard"
          onChange={(e) => setIncomeTwo(e.target.value)}
        />
        <div>
          <div>Percent of income: {(incomePercentTwo * 100).toFixed(1)}%</div>
          <div>
            Total to contribute: $
            {(Number(total) * incomePercentTwo).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
