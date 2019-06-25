import React from "react"

import { style } from "typestyle"
import { percent } from "csx"
import { ThemeContext } from "../themes/ThemeContext"

export function ThemeBase({
  theme,
  children,
}: {
  theme: Theme
  children: React.ReactNode
}) {
  const $page = style(
    {
      backgroundColor: theme.Colors.Background,
      color: theme.Colors.Text,
      height: percent(100),
      overflow: "auto",
    },
    theme.Typography.NormalText,
  )

  return (
    <ThemeContext.Provider value={theme}>
      <div className={$page} children={children} />
    </ThemeContext.Provider>
  )
}
