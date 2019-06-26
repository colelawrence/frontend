import React from 'react'

import Button from '../chrome/Button'
import ExternalLink from '../ExternalLink'

export default class BodyReadOnly extends React.PureComponent {
  render () {
    const { peername, name } = this.props
    return (
      <div className='body-read-only-wrap'>
        <p>View the dataset body using the Qri Desktop App</p>
        <ExternalLink href='https://qri.io/download/' target='_blank' ><Button large text='Download the Qri App' /></ExternalLink>
        <p className='body-read-margin-top'>Launch the app and navigate to: </p>
        <p className='linkMedium'>{`${peername}/${name}`}</p>
        <p>Then add the dataset to view the body!</p>
      </div>
    )
  }
}

BodyReadOnly.propTypes = {
}

BodyReadOnly.defaultProps = {
}
