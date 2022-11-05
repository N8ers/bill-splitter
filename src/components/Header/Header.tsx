import * as React from "react"

import styles from "./Header.module.css"

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>Bill Splitter</h1>
      <h4>Split your bill based on your income.</h4>
      <p>
        Great for partners, roommates, or anyone who wants to chip in by a
        different measure of fairness.
      </p>
    </div>
  )
}
