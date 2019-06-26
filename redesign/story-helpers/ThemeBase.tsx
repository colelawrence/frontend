import * as React from "react"

import { style } from "typestyle"
import { percent, viewHeight } from "csx"
import { ThemeContext } from "../themes/ThemeContext"
import { TypographyStyles } from "../components/TypographyStyles";

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
      paddingBottom: viewHeight(20),
      overflow: "auto",
    },
    theme.Typography.NormalText,
  )

  return (
    <ThemeContext.Provider value={theme}>
      <TypographyStyles>
        <div className={$page} children={children} />
      </TypographyStyles>
    </ThemeContext.Provider>
  )
}
