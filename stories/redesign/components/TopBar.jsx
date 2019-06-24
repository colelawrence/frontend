import * as React from "react"

import { getTheme } from "../themes/ThemeContext"
import { style } from "typestyle"
import { px } from "csx"

const $docsUrl = "https://qri.io/docs/"

export const TopBar = () =>
  getTheme(theme => {
    return (
      <div
        className={style({
          backgroundColor: theme.Colors.InvertBackground,
        })}
      >
        <div
          className={style({
            height: px(50),
            color: theme.Colors.InvertText,
            backgroundColor: theme.Colors.InvertBackground,
            $nest: {
              "&>*": {
                // everything together
                display: "inline-block",
              },
              "a": {
                textDecoration: "none",
                color: theme.Colors.InvertText,
                $nest: {
                  "&:hover": {
                    textDecoration: "none",
                  },
                },
              },
            },
          })}
        >
          <TopBarLogo />
          <a href={$docsUrl}>Docs</a>
        </div>
      </div>
    )
  })

function TopBarLogo() {
  // @ts-ignore
  const $logo = require("../assets/Web/Logo.svg")

  return (
    <img
      src={$logo}
      alt="Qri Logo"
      className={style({
        height: px(50),
        width: px(224),
        marginRight: px(-80),
      })}
    />
  )
}
