import * as React from "react"

import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Bill Splitter</h1>
      <p>Split your expense by income.</p>
    </div>
  )
}
