import * as React from "react"

import { style } from "typestyle"
import { px, percent } from "csx"
import { getTheme } from "../../themes/ThemeContext"

/** Center and pad page content */
export const PageWidth = ({ children }) =>
  getTheme(theme => (
    <div
      className={style({
        maxWidth: theme.Sizes.MaxPageWidth,
        width: percent(100),
        paddingLeft: theme.Sizes.PageSidePadding,
        paddingRight: theme.Sizes.PageSidePadding,
        marginLeft: "auto",
        marginRight: "auto",
      })}
    >
      {children}
    </div>
  ))
