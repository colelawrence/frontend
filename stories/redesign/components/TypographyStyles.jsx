import * as React from "react"

import { getTheme } from "../themes/ThemeContext"
import { style } from "typestyle"

/** Provide h1, h2, h3, h4, pre, etc with expected typography */
export function TypographyStyles({ children }) {
  return getTheme(theme => {
    const color = { color: theme.Colors.Text }
    const $typographyStyles = style({
      $nest: {
        "h1": { ...theme.Typography.Heading1, ...color },
        "h2": { ...theme.Typography.Heading2, ...color },
        "h3": { ...theme.Typography.Heading3, ...color },
        "h4": { ...theme.Typography.Heading4, ...color },
        "pre": { ...theme.Typography.NormalCode, ...color },
        "code": { ...theme.Typography.NormalCode, ...color },
        "b": { fontWeight: theme.Fonts.BodyFont.Semibold.fontWeight },
      },
    })
    return <div className={$typographyStyles} children={children} />
  })
}
