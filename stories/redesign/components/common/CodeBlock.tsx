import * as React from "react"
import { style } from "typestyle"
import { getTheme } from "../../themes/ThemeContext"
import { px, em } from "csx"

export class CodeBlock extends React.PureComponent<{ label?: string }> {
  render() {
    return getTheme(theme => {
      const $preStyle = style({
        ...theme.Typography.NormalCode,
        padding: em(1),
        position: "relative",
        borderRadius: theme.Sizes.SmallRadius,
        color: theme.Colors.Text,
        background: theme.Colors.BackgroundDim,
        lineHeight: 1.3,
        border: `1px solid ${theme.Colors.Divider}`,

        $nest: {
          "&[data-label]": {
            paddingTop: em(2),
            $nest: {
              "&::after": {
                ...theme.Typography.SmallCode,
                content: "attr(data-label)",
                color: theme.Colors.TextDim,
                position: "absolute",
                top: px(-1),
                left: px(-1),
                padding: ".2em .75em",
                border: `1px solid ${theme.Colors.Divider}`,
                borderRadius: theme.Sizes.SmallRadius + " 0px",
              },
            },
          },
        },
      })

      if (this.props.label) {
        return (
          <pre className={$preStyle} data-label={this.props.label}>
            {this.props.children}
          </pre>
        )
      }
      return <pre className={$preStyle}>{this.props.children}</pre>
    })
  }
}
