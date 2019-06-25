import React from "react"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { em } from "csx"

export function FlashWarning({ children }) {
  return getTheme(theme => (
    <div
      className={style({
        border: `2px solid ${theme.Colors.TextYellow}`,
        backgroundColor: theme.Colors.BackgroundYellow,
        borderRadius: theme.Sizes.MediumRadius,
        padding: em(1),
        margin: em(2),
      })}
    >
      {children}
    </div>
  ))
}
