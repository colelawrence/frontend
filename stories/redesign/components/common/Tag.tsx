import * as React from "react"
import { style } from "typestyle"
import { getTheme } from "../../themes/ThemeContext"
import { px, em } from "csx"

export class Tag extends React.PureComponent<{ title: string }> {
  render() {
    return getTheme(theme => {
      const $style = style({
        ...theme.Fonts.BodyFont.Bold,
        fontSize: px(10),
        textTransform: "uppercase",
        padding: ".3em .6em",
        borderRadius: theme.Sizes.SmallRadius,
        color: "white",
        lineHeight: 1,
        verticalAlign: "middle",
        display: "inline-block",
      })

      const createTag = (label: string, color1: string, color2: string) => (
        <div
          className={$style}
          style={{
            background: `linear-gradient(113.43deg, ${color1} 5.05%, ${color2} 94.95%)`,
          }}
        >
          {label}
        </div>
      )

      switch (this.props.title.toLowerCase()) {
        case "ipyth":
          return createTag(
            "ipyth",
            theme.Colors.BackgroundRed,
            theme.Colors.TextRed,
          )
        case "webgl":
        case "web gl":
          return createTag(
            "Web gl",
            theme.Colors.BackgroundYellow,
            theme.Colors.TextYellow,
          )
        case "d3":
          return createTag(
            "D3",
            theme.Colors.BackgroundBlue,
            theme.Colors.TextBlue,
          )
        default:
          return createTag(
            this.props.title,
            theme.Colors.BackgroundGreen,
            theme.Colors.TextGreen,
          )
      }
    })
  }
}
