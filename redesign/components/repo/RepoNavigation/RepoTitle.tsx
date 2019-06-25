import * as React from "react"

import { getTheme } from "../../../themes/ThemeContext"
import { style } from "typestyle"
import { px, rotate, deg } from "csx"

/**
 * @param {{
 *  ownerTitle: string,
 *  ownerClick: Function,
 *  repoTitle: string,
 *  repoClick: Function,
 * }} props
 */
export const RepoTitle = props =>
  getTheme(theme => {
    return (
      <div
        className={style(theme.Typography.LargeTextSemibold, {
          color: theme.Colors.Text,
          $nest: {
            "&>*": {
              display: "inline-block",
              verticalAlign: "middle",
            },
          },
        })}
      >
        <span
          style={{ color: theme.Colors.Text, cursor: "pointer" }}
          onClick={() => props.ownerClick()}
        >
          {props.ownerTitle}
        </span>
        <Dash color={theme.Colors.TextDim} />
        <span
          style={{ color: theme.Colors.TextDim, cursor: "pointer" }}
          onClick={() => props.repoClick()}
        >
          {props.repoTitle}
        </span>
      </div>
    )
  })

/** @param {{ color: string }} props */
function Dash({ color }) {
  return (
    <div
      className={style({
        background: color,
        transform: rotate(deg(15)),
        height: px(34),
        width: px(3),
        marginLeft: px(14),
        marginRight: px(14),
      })}
    />
  )
}
