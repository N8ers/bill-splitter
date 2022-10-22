import React, { useState } from "react"

import { TextField } from "@mui/material"

import "./App.css"

function App() {
  const [message, setMessage] = useState("")

  return (
    <div className="App">
      <h4>Type in the input for your message to appear!</h4>

      <TextField
        label="Message"
        variant="standard"
        onChange={(e) => setMessage(e.target.value)}
      />

      <div>{message}</div>
    </div>
  )
}

export default App
