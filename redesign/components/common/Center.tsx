import * as React from "react"

import { style } from "typestyle"

export function Center({ children }) {
  return (
    <div
      children={children}
      className={style({
        textAlign: "center",
        verticalAlign: "middle",
        alignItems: "center",
        alignContent: "center",
      })}
    />
  )
}
