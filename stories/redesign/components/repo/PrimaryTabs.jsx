import * as React from "react"

import { getTheme } from "../../themes/ThemeContext"
import { style } from "typestyle"
import { px, rotate, deg } from "csx"

/**
 * @typedef {{
 *     title: string,
 *     onClick: Function,
 *     active: boolean,
 *     iconElt?: (color: string) => JSX.Element,
 * }} TabConfig
 */

/**
 * @param {{
 *   leftTabs: TabConfig[]
 *   rightTabs: TabConfig[]
 * }} props
 */
export const PrimaryTabs = props =>
  getTheme(theme => {
    return (
      <div>
        <div
          style={{ display: "flex", marginBottom: px(-2), marginTop: px(10) }}
        >
          <div style={{ flex: 1 }}>
            {props.leftTabs.map(tab => createTab(tab, theme))}
          </div>
          <div style={{ flex: 1, textAlign: "right" }}>
            {props.rightTabs.map(tab => createTab(tab, theme))}
          </div>
        </div>
        <div
          className={style({
            background: theme.Colors.Divider,
            height: px(2),
          })}
        ></div>
      </div>
    )
  })

/**
 * @param {TabConfig} tab
 * @param {Theme} theme */
function createTab(tab, theme) {
  const fontStyles = tab.active
    ? theme.Typography.NormalTextActive
    : theme.Typography.NormalText

  const color = tab.active ? theme.Colors.Text : theme.Colors.TextDim
  return (
    <div
      key={tab.title}
      onClick={() => tab.onClick()}
      className={style(fontStyles, {
        cursor: "pointer",
        display: "inline-block",
        color: color,
      })}
    >
      <div
        className={style({
          paddingTop: px(15),
          paddingLeft: px(16),
          paddingRight: px(20),
          paddingBottom: px(2),
          display: "flex",
        })}
      >
        {tab.iconElt && (
          <span style={{ marginRight: px(6) }}>{tab.iconElt(color)}</span>
        )}
        {tab.title}
      </div>
      <div
        className={style({
          visibility: tab.active ? "visible" : "hidden",
          background: theme.Colors.Text,
          height: px(2),
        })}
      ></div>
    </div>
  )
}

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
