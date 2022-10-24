import React from "react"

import { TextFieldCustom } from "./TextFieldCustom"
import { Counter } from "./Counter"

import "./App.css"

function App() {
  return (
    <div>
      <TextFieldCustom
        text="hello"
        person={{ firstName: "", lastName: "" }}
        handleChange={(e) => {
          console.log("e on parent: ", e)
        }}
      />

      <Counter>
        {(count, setCount) => (
          <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  )
}

export default App
