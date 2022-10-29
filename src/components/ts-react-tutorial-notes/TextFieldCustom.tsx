import React, { useState, useRef } from "react"

// Create a "function component" type
// With <> props = export const TextField: React.FC<{ text: string }> = () => {}
// this can also be done with an interface!

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean // ? means field is optional
  i?: number
  fn?: (name: string) => void // also can return number/string, etc
  obj?: {
    field1: string
  }
  person: Person
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// you can define an array 2 ways
// 1) type State = Todo[]
// 2) Array<Todo>

export const TextFieldCustom: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<number | null | undefined>(5)
  setCount(12)
  setCount(null)
  setCount(undefined)

  interface TextNode {
    text: string
  }

  const [myObj, setMyObj] = useState<TextNode>({ text: "hello" })
  setMyObj({ text: "sup" })

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div>
      <div> {count}</div>
      <div> {myObj.text}</div>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}
