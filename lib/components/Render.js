import React from 'react'
import Base from './Base'

export default class Render extends Base {
  template (css) {
    const { peername, name, path } = this.props
    var url = `${peername}/${name}`
    if (path !== '') {
      url += `/at/${path}`
    }
    return (
      <iframe style={{width: '100%', height: '100%', border: 'none'}} src={`http://localhost:2503/render/${url}`} />
    )
  }
}