import * as React from "react"

export class Tag extends React.PureComponent<{ title: string }> {
  render() {
    return <div>{this.props.title}</div>
  }
}
