import * as React from "react"

import { ThemeBase } from "./ThemeBase"
import { Night, Day } from "../themes"

// This could probably be made into a storybook somehow...
export class ThemeSwitcher extends React.Component<
  {},
  { isNight: boolean; show: boolean }
> {
  constructor(props) {
    super(props)

    this.state = { isNight: false, show: true }
  }

  render() {
    const theme = this.state.isNight ? Night : Day
    return (
      <ThemeBase theme={theme}>
        {this.state.show && (
          <div
            style={{
              padding: ".5rem 1rem",
              borderBottom: `2px dashed ${theme.Colors.BackgroundDim}`,
            }}
          >
            <input
              type="checkbox"
              name="toggleNight"
              id="toggleNight"
              checked={this.state.isNight}
              onClick={_ =>
                this.setState(state => ({ isNight: !state.isNight }))
              }
            />
            &nbsp;
            <label htmlFor="toggleNight">Night mode</label>
            &nbsp; &nbsp;
            <span onClick={_ => this.setState({ show: false })}>Close</span>
          </div>
        )}
        {this.props.children}
      </ThemeBase>
    )
  }
}
