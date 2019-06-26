import React from 'react'

import MetadataViewer from './MetadataViewer'

import MetaProps from '../../propTypes/metaProps'

export default class Meta extends React.PureComponent {
  render () {
    const { meta } = this.props

    if (meta === undefined) {
      return (<p style={{ margin: 20 }}>No meta found for this dataset.</p>)
    }

    let md = meta
    if (typeof meta === 'string') {
      md = { path: meta }
    }
    return (
      <MetadataViewer metadata={md} />
    )
  }
}

Meta.propTypes = {
  meta: MetaProps
}

Meta.defaultProps = {
}
