import React, { CSSProperties } from 'react'

export default class Swatch extends React.PureComponent<{ style: CSSProperties, title: string, hex: string }> {
  render () {
    const { style, title, hex } = this.props
    return (
      <div className='swatch-wrap'>
        <div className='swatch' style={style} />
        <p>{title}</p>
        <p>{hex}</p>
      </div>
    )
  }
}
